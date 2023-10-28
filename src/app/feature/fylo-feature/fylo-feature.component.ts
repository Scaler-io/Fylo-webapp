import { Component } from '@angular/core';

@Component({
  selector: 'app-fylo-feature',
  templateUrl: './fylo-feature.component.html',
  styleUrls: ['./fylo-feature.component.scss'],
})
export class FyloFeatureComponent {
  public features = [
    [
      {
        icon: '../../../assets/images/icon-access-anywhere.svg',
        heading: 'Access your file from anywhere',
        description:
          'The ability to use a smartphone, tablet or computer to access yoyr account means your files follow you everywhere.',
      },
      {
        icon: '../../../assets/images/icon-security.svg',
        heading: 'Security you can trust',
        description:
          '2-factor authentication and user-controlled encrytion are just a couple of the security features we allow to help secure your files.',
      },
    ],
    [
      {
        icon: '../../../assets/images/icon-collaboration.svg',
        heading: 'Access your file from anywhere',
        description:
          'The ability to use a smartphone, tablet or computer to access yoyr account means your files follow you everywhere.',
      },
      {
        icon: '../../../assets/images/icon-any-file.svg',
        heading: 'Security you can trust',
        description:
          '2-factor authentication and user-controlled encrytion are just a couple of the security features we allow to help secure your files.',
      },
    ],
  ];

  public notFirstRow(index) {
    return index > 0;
  }
}
