import { Routes } from '@angular/router';
import { ProductFormComponent } from './product/product-form/product-form.component';

export const routes: Routes = [
    {
        path: "invoice",
        loadChildren: () => import("./invoice/invoice.module").then(x => x.InvoiceModule)
    },
    { path: "product-form", component: ProductFormComponent },
];
