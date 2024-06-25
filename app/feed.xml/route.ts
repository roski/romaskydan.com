import { feed } from '@/libs/feed-util';

export function GET() {
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
