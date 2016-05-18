import { Component }  from "angular2/core";
import { ProductFilterPipe } from "./products-filter.pipe";

@Component({
  selector: 'pm-products',
  pipes: [ProductFilterPipe],
  templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent {
  showImage: boolean = true
  pageTitle: string = 'Product List'
  products: any[] = [
    {
      title: "Ice Cream",
      price: 5.95,
      code: "1C3",
      available: 2,
      rating: [1, 2, 3]
    },
    {
      title: "Root Beer",
      price: 2.00,
      code: "R00T",
      available: 0,
      rating: [1, 2, 3, 4]
    }
  ]
}
