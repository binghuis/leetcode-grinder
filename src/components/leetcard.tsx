'use client';

import { Button } from './ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

export function LeetCard() {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            variant={'outline'}
            onClick={() => {
              console.log(11);
            }}
          >
            {' '}
            704. 二分查找
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">二分查找</HoverCardContent>
      </HoverCard>
    </div>
  );
}
