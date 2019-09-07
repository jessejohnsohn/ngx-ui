import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation
} from '@angular/core';

export interface NavigationChoice {
  text: string;
  link: string | any[];
}

@Component({
  selector: 'ngb-custom-fixed-nav-bar',
  templateUrl: './fixed-nav-bar.component.html',
  styleUrls: ['./fixed-nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FixedNavBarComponent {
  @Input() title: string;
  @Input() navigationChoices: NavigationChoice[] = [];
}
