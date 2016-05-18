System.register(["angular2/core", "./products-filter.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, products_filter_pipe_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (products_filter_pipe_1_1) {
                products_filter_pipe_1 = products_filter_pipe_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent() {
                    this.showImage = true;
                    this.pageTitle = 'Product List';
                    this.products = [
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
                    ];
                }
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-products',
                        pipes: [products_filter_pipe_1.ProductFilterPipe],
                        templateUrl: 'app/products/product-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map