export interface FormatToken {
  comma?: boolean;
  compact?: boolean; // K, M, B, ..., compact=true이면 comma는 자동으로 true.
  places?: number | null; // 소수점 자리수, null: 소수점 모두 표현, default = 6
  tick?: boolean; // true이면 뒤에 ticker(symbol)을 붙임
}
