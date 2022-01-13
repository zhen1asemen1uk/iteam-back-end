import {Entity, model, property} from '@loopback/repository';

@model()
export class Projects extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  main_participant_id?: number;

  @property({
    type: 'array',
    itemType: 'number',
  })
  sub_participants?: number[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  technologies?: string[];


  constructor(data?: Partial<Projects>) {
    super(data);
  }
}

export interface ProjectRelations {
  // describe navigational properties here
}

export type ProjectWithRelations = Projects & ProjectRelations;
