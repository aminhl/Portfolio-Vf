import { Component, Input } from '@angular/core';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'spartan-avatar',
  standalone: true,
  imports: [
    HlmAvatarImageDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
  ],
  template: `
    <hlm-avatar [variant]="variant">
      <img [src]="src" [alt]="alt" hlmAvatarImage />
    </hlm-avatar>
  `,
})
export class AvatarComponent {
  @Input() src: string = 'https://www.spartan.ng/assets/avatar.png';
  @Input() alt: string = 'spartan logo. Resembling a spartanic shield';
  @Input() variant: AvatarVariant;
}

export type AvatarVariant = 'small' | 'medium' | 'large' | null | undefined;
