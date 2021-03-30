const PATH_PATTERN = /.*\/(.*)\/(.*)-(lecture|ge|lab)-.*\.adoc/gi;

export interface SectionInfo {
  chapter: string;
  type: 'ge' | 'lecture' | 'lab' | '';
  section: string;
}

export function idFromInfo(info: SectionInfo): string {
  // 'DO400/guides/en-US/sg-chapters/topics/intro/features-lecture-content.adoc' -> 'intro-features-lecture'
  return info ? `${info.chapter}-${info.section}-${info.type}` : '';
}

export function sectionInfoFromPath(path: string): SectionInfo | null {
  const [fullPath, chapter, section, type] =
    new RegExp(PATH_PATTERN).exec(path) ?? [];
  if (fullPath) {
    const info: SectionInfo = {
      chapter,
      // TODO cleaner way to handle this
      type: type === 'ge' || type === 'lecture' || type === 'lab' ? type : '',
      section,
    };
    // console.log('info:', info);
    return info;
  } else {
    return null;
  }
}
