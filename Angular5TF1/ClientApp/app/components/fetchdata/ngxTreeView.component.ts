import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
@Component({
    selector: 'fetchNgx',
    templateUrl: './ngxTreeView.component.html'
})
export class NgxTreeViewComponent implements OnInit{
 
    items: TreeviewItem[] = [];
    values: number[] = [];
    List: any[] =[];
    config = TreeviewConfig.create({

        hasAllCheckBox: false,
        hasFilter: false,
        hasCollapseExpand: false,
        decoupleChildFromParent: false,
        maxHeight: 400,
        
    });
    errorMessage: any;
    public data: any[] = [
        {
            text: 'Furniture', items: [
                { text: 'Tables & Chairs' },
                { text: 'Sofas' },
                { text: 'Occasional Furniture' }
            ]
        },
        {
            text: 'Decor', items: [
                { text: 'Bed Linen' },
                { text: 'Curtains & Blinds' },
                { text: 'Carpets' }
            ]
        }
    ];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        //http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
        //    this.forecasts = result.json() as WeatherForecast[];
        //}, error => console.error(error));
        //Observable.interval(800 * 60).subscribe(x => {
        //    this.doSomething();
        //});
        
      
    }
    nodes = [
        {
            id: 1,
            name: 'root1',
            children: [
                { id: 2, name: 'child1' },
                { id: 3, name: 'child2' }
            ]
        },
        {
            id: 4,
            name: 'root2',
            children: [
                { id: 5, name: 'child2.1' },
                {
                    id: 6,
                    name: 'child2.2',
                    children: [
                        { id: 7, name: 'subsub' }
                    ]
                }
            ]
        }
    ];
    options = {};
    ngOnInit(): void {
        this.items = this.getRooms();
    }
    onFilterChange(value: string) {
        console.log('filter:', value);
    }
    onSelectedChange(value: string) {
        console.log('filter:', value);
    }
    getRooms(): TreeviewItem[] {
        const items: TreeviewItem[] = [];
        for (let i = 0; i < 100; i++) {
            const value: any = i === 0 ? { name: `${i}` } : i;

            const item = new TreeviewItem({ text: `Room ${i}`, value: value  });
            items.push(item);
        }

        return items;
    }
    
}