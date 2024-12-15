import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModule } from './product/product.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InvoiceModule, ProductModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Alina Kumorek';
  name: string = "BB";
}
