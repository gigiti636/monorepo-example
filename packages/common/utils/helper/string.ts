import type { Draft } from '@reduxjs/toolkit';
import type { ClientType, UserType } from '@/redux/types';

export function romanizeGreek(text: string): string {
  const greekToRomanMap: { [key: string]: string } = {
    α: 'a',
    β: 'v',
    γ: 'g',
    δ: 'd',
    ε: 'e',
    ζ: 'z',
    η: 'i',
    θ: 'th',
    ι: 'i',
    κ: 'k',
    λ: 'l',
    μ: 'm',
    ν: 'n',
    ξ: 'x',
    ο: 'o',
    π: 'p',
    ρ: 'r',
    σ: 's',
    τ: 't',
    υ: 'y',
    φ: 'f',
    χ: 'ch',
    ψ: 'ps',
    ω: 'o',
    ά: 'a',
    έ: 'e',
    ή: 'i',
    ί: 'i',
    ό: 'o',
    ύ: 'y',
    ώ: 'o',
    ς: 's',
    ϊ: 'i',
    ΐ: 'i',
    ϋ: 'y',
    ΰ: 'y',
  };

  let romanizedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i).toLowerCase();
    // eslint-disable-next-line no-prototype-builtins
    if (Object.prototype.hasOwnProperty.call(greekToRomanMap, char)) {
      romanizedText += greekToRomanMap[char];
    } else {
      romanizedText += char;
    }
  }

  return romanizedText;
}

export function includesIgnoreCase(str: string, substr: string): boolean {
  return romanizeGreek(str).toLowerCase().includes(romanizeGreek(substr).toLowerCase());
}

export function formatAddress(zipcode?: number, area?: string, city?: string, region?: string): string {
  const parts = [];

  if (area && area.trim() !== '') {
    parts.push(area.trim());
  }
  if (city && city.trim() !== '') {
    parts.push(city.trim());
  }
  if (region && region.trim() !== '') {
    parts.push(region.trim());
  }
  if (zipcode) {
    parts.push(String(zipcode));
  }

  return parts.join(', ');
}

export const commaSeparatedFormatter = (amount: number): string => {
  const value = Number(amount);
  if (isNaN(value)) {
    return '0.00';
  }
  return value.toLocaleString('el-GR');
};

export const isValidJSONObject = (str: string | undefined | null): boolean => {
  try {
    return !!str && JSON.parse(str) !== null;
  } catch (e) {
    return false;
  }
};

export const isStrValid = (str: string | null): boolean => {
  try {
    return !!str && str.trim().length > 0;
  } catch (e) {
    return false;
  }
};

export const serializeState = (state: Draft<UserType | ClientType>, key: string) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(key, serializedState);
};

export function stringToColor(string = '') {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}
