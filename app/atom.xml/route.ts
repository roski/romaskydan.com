import { feed } from '@/libs/feed-util';

export function GET() {
  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
