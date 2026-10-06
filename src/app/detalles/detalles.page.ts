import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import restaurantesJSON from '../../assets/datos/restaurantes.json';
import { Restaurante } from '../interface/restaurante';

@Component({
    selector: 'app-detalles',
    templateUrl: './detalles.page.html',
    styleUrls: ['./detalles.page.scss'],
    standalone: true,
    imports: [IonicModule],
})
export class DetallesPage implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly restaurantes: Restaurante[] =
        restaurantesJSON as Restaurante[];

    private readonly restauranteSeleccionado =
        signal<Restaurante | null>(null);

    public readonly restaurante = computed(() =>
        this.restauranteSeleccionado()
    );

    public readonly mostrarDetalles = signal<Restaurante | null>(null);

    ngOnInit(): void {
        const documentName =
            this.route.snapshot.paramMap.get('documentName');

        if (documentName) {
            const restaurante = this.restaurantes.find(
                restaurante => restaurante.documentName === documentName
            );

            if (restaurante) {
                this.restauranteSeleccionado.set(restaurante);
            }
        }
    }


      // ############################### DATOS DEL DESARROLLADOR ###############################

  desarrollador = {
    nombre: 'Jeffry Jaquez Santana',
    Github: 'https://github.Vil-Blass'
  };
}