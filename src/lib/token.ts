'use client';

interface TokenStorage {
  accessToken: string | null;
  refreshToken: string | null;
}

class TokenManager {
  private tokens: TokenStorage = {
    accessToken: null,
    refreshToken: null
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadTokens();
    }
  }

  private loadTokens() {
    this.tokens.accessToken = localStorage.getItem('accessToken');
    this.tokens.refreshToken = localStorage.getItem('refreshToken');
  }

  setTokens(accessToken: string, refreshToken: string) {
    this.tokens.accessToken = accessToken;
    this.tokens.refreshToken = refreshToken;
    
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  getAccessToken(): string | null {
    return this.tokens.accessToken;
  }

  getRefreshToken(): string | null {
    return this.tokens.refreshToken;
  }

  clearTokens() {
    this.tokens.accessToken = null;
    this.tokens.refreshToken = null;
    
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  async refreshAccessToken(): Promise<string | null> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) return null;

    try {
      console.log("==> Attempting to refresh access token");
      
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        console.log("==> Token refresh failed, clearing tokens");
        this.clearTokens();
        return null;
      }

      const data = await response.json();
      this.setTokens(data.accessToken, data.refreshToken);
      console.log("==> Access token refreshed successfully");
      return data.accessToken;
    } catch (error) {
      console.error("==> Token refresh error:", error);
      this.clearTokens();
      return null;
    }
  }

  async makeAuthenticatedRequest(url: string, options: RequestInit = {}): Promise<Response> {
    let accessToken = this.getAccessToken();
    
    if (!accessToken) {
      throw new Error('No access token available');
    }

    const makeRequest = async (token: string) => {
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Authorization': `Bearer ${token}`,
        },
      });
    };

    console.log("==> Making authenticated request to:", url);
    let response = await makeRequest(accessToken);

    // If token expired, try to refresh
    if (response.status === 401) {
      console.log("==> Access token expired, attempting refresh");
      const newToken = await this.refreshAccessToken();
      if (newToken) {
        console.log("==> Retrying request with new token");
        response = await makeRequest(newToken);
      }
    }

    return response;
  }
}

export const tokenManager = new TokenManager();