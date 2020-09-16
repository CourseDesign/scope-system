import ScopeValidatorContext from './scope-validator-context';
import Pattern from './pattern';

export default abstract class ScopeValidator {
  pattern: Pattern;

  protected constructor(pattern: string | Pattern) {
    if (pattern instanceof Pattern) this.pattern = pattern;
    else this.pattern = new Pattern(pattern);
  }

  test(str: string): boolean {
    return this.pattern.test(str);
  }

  abstract validate(name: string, context: ScopeValidatorContext): boolean;
}
