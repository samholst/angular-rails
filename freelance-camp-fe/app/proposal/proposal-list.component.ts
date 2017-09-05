import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(1, 'ABC Company', 'https://www.samwholst.com', 'Ruby on Rails', 150, 120, 15, 'sam@samwholst.com')
  proposalTwo: Proposal = new Proposal(2, 'Coo Company', 'https://www.samwholst.com', 'Ruby on Rails', 150, 120, 15, 'sam@samwholst.com')
  proposalThree: Proposal = new Proposal(3, 'Pwn\'d Co', 'https://www.samwholst.com', 'Ruby on Rails', 150, 120, 15, 'sam@samwholst.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
