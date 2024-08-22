import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorHelperService {
  public static componentToHex(c: number) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  public static rgbToHex(r: number, g: number, b: number) {
    return '#' + ColorHelperService.componentToHex(r) + ColorHelperService.componentToHex(g) + ColorHelperService.componentToHex(b);
  }

  public static hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  public static invertedColor(bgColor: string): string {
    const rgb = ColorHelperService.hexToRgb(bgColor);
    const r = rgb.r;
    const g = rgb.g;
    const b = rgb.b;
    const sum = r + g + b;
    const perceivedLightness = sum / 255;
    const thirdParam = perceivedLightness - 1;
    return `hsl(0, 0%, calc(${thirdParam} * -10000000%))`;
  }
}
