import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import restaurantesJSON from '../../assets/datos/restaurantes.json';
import { Restaurante } from '../interface/restaurante';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.page.html',
    styleUrls: ['./detalle.page.scss'],
    standalone: true,
    imports: [IonicModule],
})
export class DetallePage implements OnInit {
    private readonly toastController = inject(ToastController);
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
        const id = this.route.snapshot.paramMap.get('id');

        if (id) {
            const restaurante = this.restaurantes.find(
                restaurante =>
                    restaurante['id'] === Number.parseInt(id, 10)
            );

            if (restaurante) {
                this.mostrarDetalles.set(restaurante);
                this.restauranteSeleccionado.set(restaurante);
            }
        }
    }
}