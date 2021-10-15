import { environment } from 'src/environments/environment';
export function generateUri(uri: string): string {
    return environment.REST_API_SERVER + this.uri;
}
