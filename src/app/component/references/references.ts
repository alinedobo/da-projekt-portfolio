import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  readonly referenceList = [
    {
      name: 'Aline Dobo',
      title: 'Frontend Developer',
      reference: "Aline really kept the team together with their great organization and clear communication. We wouldn't have got this far without their commitment."
    },
    {
      name: 'Aline Dobo',
      title: 'Frontend Developer',
      reference: "Aline was a top team colleague at DA. Their positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals."
    },
    {
      name: 'Aline Dobo',
      title: 'Frontend Developer',
      reference: "It was a great pleasure to work with Aline. They know how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, they were always present and available to listen and help others, with a great sense of humor as well."
    },
  ]
}
