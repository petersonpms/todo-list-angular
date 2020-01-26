import { Component, OnInit } from '@angular/core';

import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

export abstract class BaseResultListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];
  constructor(private resourceService: BaseResourceService<T>) {
  }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      todoList => this.resources = todoList.sort((a, b) => a.id - b.id),
      () => alert('Erro ao carregar lista'));
  }

  deleteResource(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.resourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(e => e !== resource),
        () => alert('Erro ao tentar excluir!')
      );
    }
  }
}
