import { Component, inject, Input, OnInit } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ang-button',
  standalone: true,
  imports: [NgClass, NgIf, NgTemplateOutlet],
  templateUrl: './button.component.html',
  styleUrl: '../../output.css',
})
export class ButtonComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() variant: 'primary' | 'secondary' | 'soft' = 'primary';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  @Input() rounded: boolean = false;
  @Input() circular: boolean = false;
  @Input() icon?: string;
  @Input() iconPosition: 'start' | 'end' = 'start';

  sanitizedIcon?: SafeHtml;

  sanitizer = inject(DomSanitizer);

  ngOnInit() {
    if (this.icon) {
      this.sanitizedIcon = this.sanitizer.bypassSecurityTrustHtml(this.icon);
    }
  }

  get classes(): string {
    const baseClasses =
      'flex items-center justify-center gap-x-2 relative outline-none transition-colors';
    const variantClasses = {
      primary: 'bg-primary hover:bg-primary-hover text-white',
      secondary:
        'bg-secondary text-secondary-text border border-secondary-border hover:bg-secondary-hover',
      soft: 'bg-soft text-soft-text hover:bg-soft-hover',
    };
    const sizeClasses = {
      xs: 'h-6 px-1.5 font-semibold text-xs',
      sm: 'h-7 px-2 font-semibold text-sm',
      md: 'h-8 px-2.5 font-semibold text-sm',
      lg: 'h-9 px-3 font-semibold text-sm',
      xl: 'h-10 px-3.5 font-semibold text-sm',
    };
    const roundedClass = this.rounded ? 'rounded-full' : '';
    const circularClass = this.circular ? 'rounded-full px-0' : '';
    const compoundClass = this.getCompoundClass();

    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${roundedClass} ${circularClass} ${compoundClass}`;
  }

  private getCompoundClass(): string {
    if (this.circular) {
      const sizeWidthClasses = {
        xs: 'w-6',
        sm: 'w-7',
        md: 'w-8',
        lg: 'w-9',
        xl: 'w-10',
      };
      return sizeWidthClasses[this.size];
    }
    if (!this.rounded && !this.circular) {
      return 'rounded-md';
    }
    return '';
  }
}
