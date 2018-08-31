import { Component, ViewChild } from '@angular/core';
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';
import { ITreeState, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';


@Component({
    selector: 'counter',
        templateUrl: './counter.component.html',
        styles: [`
.dashboardContainer {
width: 100%;
height: 100%;
position: fixed;
}
.componentsContainer {
position: fixed;
bottom: 0;
top: 100px;
width: 100%; }
.componentContainer {
overflow: auto;
position: absolute; }
`],
})
export class CounterComponent {
    public currentCount = 0;
    //ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
    //techiediaries = 'https://www.npmjs.com/~techiediaries';
    //letsboot = 'https://www.letsboot.com/';
    public incrementCounter() {
        this.currentCount++;
    }
    selectedId: any = null;
    public disableBasicMenu = false;
    public dataItem: any[] = [

        { name: 'ashutosh', age: 27 },
        { name: 'Ram', age: 27 },
        { name: 'Rishi', age: 22  }

    ];
    nodes = [
        {
            id: 1,
            name: 'root1',
            isFolder:true,
            children: [
                { id: 2, name: 'child1', isFolder: false },
                { id: 3, name: 'child2', isFolder: false }
            ]
        },
        {
            id: 4,
            isFolder: true,
            name: 'root2',
            children: [
                { id: 5, name: 'child2.1', isFolder: false },
                {
                    id: 6,
                    isFolder: false,
                    name: 'child2.2',
                    children: [
                        { id: 7, name: 'subsub', isFolder: false,}
                    ]
                }
            ]
        }
    ];

     actionMapping: IActionMapping = {
       
        keys: {
            [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
        }
    }
    options = {};
    state: ITreeState | undefined;
    collapseAll() {
        this.state = {
            ...this.state,
            expandedNodeIds: {}
        };
    }

    hideFolders() {
        const hiddenNodeIds:any = {};

        this.nodes.forEach((node) => {
            if (node.isFolder) {
                hiddenNodeIds[node.id] = true;
            }
        });

        this.state = {
            ...this.state,
            hiddenNodeIds
        };
    }
    public items: any[] = [
        {
            name: 'John',
            otherProperty: 'Foo',
            layout: {
                height: '90px',
                left: '0px',
                top: '0px',
                width: '98px',
            },
            actions: [{
                enabled: true,
                execute: (item: any): void => console.log(item),
                html: (item: any): string => `John custom: ${item.name}`,
                visible: true,
            }, {
                divider: true,
                visible: true,
            }, {
                enabled: true,
                execute: (item: any): void => console.log(item),
                html: (item: any): string => `John custom: ${item.name}`,
                visible: true,
            }],
        },
        {
            name: 'Joe',
            otherProperty: 'Bar',
            layout: {
                height: '90px',
                left: '98px',
                top: '0px',
                width: '98px',
            },
            actions: [{
                enabled: true,
                execute: (item: any): void => { (<any>window).fake.doesntexist = 2; },
                html: (item: any): string => `Joe something: ${item.name}`,
                visible: true,
            }],
        },
    ];
    onEvent = ($event: any) => {
        this.selectedId = $event.node.data.id;
        console.log(this.selectedId)
    };


    public outsideValue = 'something';

    @ViewChild('basicMenu') public basicMenu: ContextMenuComponent | undefined;
    @ViewChild('enableAndVisible') public enableAndVisible: ContextMenuComponent | undefined;
    @ViewChild('withFunctions') public withFunctions: ContextMenuComponent | undefined;

    constructor(private contextMenuService: ContextMenuService) { }

    public onContextMenu($event: MouseEvent, item: any): void {
        this.contextMenuService.show.next({ event: $event, item: item });
        $event.preventDefault();
    }


    public showMessage(message: any, data?: any): void {
        data = this.selectedId;
        alert("click on node ="+data)
        console.log(message, data);
    }
    MenuClick() {
        alert("menu clicked");
    }
    public onlyJohn(item: any): boolean {
        return item.name === 'John';
    }

    public onlyJoe(item: any): boolean {
        return item.name === 'Joe';
    }

    public log(message: any): void {
        console.log(message);
    }

}
