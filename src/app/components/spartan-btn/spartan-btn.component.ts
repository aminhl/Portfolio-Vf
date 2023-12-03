import { Component, Input } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'spartan-btn',
  standalone: true,
  imports: [HlmButtonDirective],
  template: ` <button hlmBtn [variant]="variant">{{ content }}</button> `,
})
export class SpartanBtnComponent {
  @Input() content: string = '';
  @Input() variant: VariantType;
}

export type VariantType =
  | 'link'
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | null
  | undefined;
