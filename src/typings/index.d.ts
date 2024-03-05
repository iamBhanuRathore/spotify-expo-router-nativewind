export type UserType =
  | {
      display_name: string;
      email: string;
      external_urls: {
        spotify: string;
      };
      followers: {
        href: string | null;
        total: number;
      };
      href: string;
      id: string;
      images: {
        url: string;
      }[];
      type: string;
      uri: string;
    }
  | {
      error: {
        message: string;
        status: number;
      };
    };
