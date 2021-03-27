import {
  assertArrayIncludes,
  assertEquals,
} from 'https://deno.land/std@0.90.0/testing/asserts.ts';
import { findID, hasID } from './index.ts';

const sampleWithIDs = `
= sample adoc file

Doesn't actually run anything.
We just want to see if ID references to <<chp-intro-lecture>> is found.

Especially if there is more than one reference to <<chp-intro-lecture>>.
But we also want to find other ones if they <<phc-other-ge>> are for other places.
`;

const sampleNoIDs = `
= sample adoc file

Doesn't actually run anything.
`;

Deno.test('finds ID tag', () => {
  assertEquals(findID(sampleNoIDs), []);
  assertArrayIncludes(findID(sampleWithIDs), [
    'chp-intro-lecture',
    'phc-other-ge',
  ]);
});

Deno.test('checks if any IDs exist', () => {
  assertEquals(hasID(sampleNoIDs), false);
  assertEquals(hasID(sampleWithIDs), true);
});
