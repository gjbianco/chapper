import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';
import {
  idFromInfo,
  sectionInfoFromPath,
  SectionInfo,
} from './section-info.ts';

const featuresLecture: SectionInfo = {
  chapter: 'intro',
  type: 'lecture',
  section: 'features',
};

const setupGe: SectionInfo = {
  chapter: 'intro',
  type: 'ge',
  section: 'setup',
};

Deno.test('determines reference info from path', () => {
  assertEquals(sectionInfoFromPath('bad match'), null);
  assertEquals(
    sectionInfoFromPath(
      'path/to/workspace/DO400/guides/en-US/sg-chapters/topics/intro/features-lecture-content.adoc'
    ),
    featuresLecture
  );
  assertEquals(
    sectionInfoFromPath(
      'path/to/workspace/DO400/guides/en-US/sg-chapters/topics/intro/setup-ge-content.adoc'
    ),
    setupGe
  );
});

Deno.test('determines reference ID from info', () => {
  assertEquals(idFromInfo(featuresLecture), 'intro-features-lecture');
  assertEquals(idFromInfo(setupGe), 'intro-setup-ge');
});
