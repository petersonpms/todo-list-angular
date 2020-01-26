import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Task extends BaseResourceModel {
  constructor(
    public description?: string,
    public date?: string,
    public time?: string,
    public finished?: boolean
  ) {
    super();
  }

  static fromJson(jsonData: any): Task {
    return Object.assign(new Task(), jsonData);
  }
}
