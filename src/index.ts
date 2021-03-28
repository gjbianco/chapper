const REFERENCE_PATTERN = /<<(.*)>>/gi;

// TODO user proper tsdoc syntax
/**
 * Searches @param(input) for AsciiDoc IDs.
 *
 * @returns string[] containing de-duplicated list of IDs.
 */
export function findID(input: string): string[] {
  // TODO might be more efficient to use Pattern.exec?
  //      but that might require re-compiling the Pattern per file
  const foundIds = input.match(REFERENCE_PATTERN) ?? [];
  return foundIds
    .map((val) => val.replace('<<', '').replace('>>', ''))
    .filter((val, i, arr) => {
      return i === 0 || val !== arr[i - 1];
    });
}

/**
 * Checks @param(input) for an AsciiDoc ID.
 */
export function hasID(input: string): boolean {
  return input.match(REFERENCE_PATTERN) !== null;
}
