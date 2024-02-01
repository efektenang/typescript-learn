type UppercaseString = Uppercase<"stringliteral">;
type LowercaseString = Lowercase<"StringLiteral">;
type CapitalizedString = Capitalize<"stringliteral">;
type UncapitalizedString = Uncapitalize<"StringLiteral">;

const intrinsic: UppercaseString = 'STRINGLITERAL'
const intrinsic2: LowercaseString = 'stringliteral'
const intrinsic3: CapitalizedString = 'Stringliteral'
const intrinsic4: UncapitalizedString = 'stringLiteral'