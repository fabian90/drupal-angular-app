import { DockerService } from './../../infrastructure/services/docker.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent implements OnInit {
  containers: any[] = [];

  constructor(private dockerService: DockerService) {}

  ngOnInit(): void {
    this.loadContainers();
  }

  loadContainers() {
    this.dockerService.getContainers().subscribe(data => {
      this.containers = data;
    });
  }

  startContainer(id: string) {
    this.dockerService.startContainer(id).subscribe(() => {
      this.loadContainers();
    });
  }

  stopContainer(id: string) {
    this.dockerService.stopContainer(id).subscribe(() => {
      this.loadContainers();
    });
  }

  removeContainer(id: string) {
    this.dockerService.removeContainer(id).subscribe(() => {
      this.loadContainers();
    });
  }

  viewLogs(id: string) {
    this.dockerService.getLogs(id).subscribe(logs => {
      console.log(logs);
      // Aquí podrías implementar la lógica para mostrar los logs en un modal o panel.
    });
  }
}
