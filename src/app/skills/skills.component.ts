import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  skills = [
    {icon: 'sync_problem', name: 'Problem Solving', value: 80},
    {icon: 'science', name: 'Code Testing', value: 70},
    {icon: 'timelapse', name: 'Time Management', value: 60},
    {icon: 'hearing', name: 'Listening', value: 90},
    {icon: 'self_improvement', name: 'Self Development', value: 95},
    {icon: 'school', name: 'Mentoring', value: 80},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
