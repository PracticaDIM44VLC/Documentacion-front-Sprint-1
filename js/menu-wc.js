'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdministratorModule.html" data-type="entity-link" >AdministratorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdministratorModule-dcd5cf839fc91680cf117d223d029b28374bc56223a109f8a2aaa6caa5516ba7b859cdac95ad6c90c816f4cc12568cf34a6e8285e52c1f55783be3eec4d98f6a"' : 'data-target="#xs-components-links-module-AdministratorModule-dcd5cf839fc91680cf117d223d029b28374bc56223a109f8a2aaa6caa5516ba7b859cdac95ad6c90c816f4cc12568cf34a6e8285e52c1f55783be3eec4d98f6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdministratorModule-dcd5cf839fc91680cf117d223d029b28374bc56223a109f8a2aaa6caa5516ba7b859cdac95ad6c90c816f4cc12568cf34a6e8285e52c1f55783be3eec4d98f6a"' :
                                            'id="xs-components-links-module-AdministratorModule-dcd5cf839fc91680cf117d223d029b28374bc56223a109f8a2aaa6caa5516ba7b859cdac95ad6c90c816f4cc12568cf34a6e8285e52c1f55783be3eec4d98f6a"' }>
                                            <li class="link">
                                                <a href="components/AdminDeviceFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDeviceFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminDutytitleFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDutytitleFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdministratorRoutingModule.html" data-type="entity-link" >AdministratorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-098be563289e1ed2fe3d7a9e8534709ff229e90659edc04a7d09cdadef3d0f98259c948d8a393f0d4e19043389c8c49a9278643133ae5aeff8d0f1413d6a8ed5"' : 'data-target="#xs-components-links-module-AppModule-098be563289e1ed2fe3d7a9e8534709ff229e90659edc04a7d09cdadef3d0f98259c948d8a393f0d4e19043389c8c49a9278643133ae5aeff8d0f1413d6a8ed5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-098be563289e1ed2fe3d7a9e8534709ff229e90659edc04a7d09cdadef3d0f98259c948d8a393f0d4e19043389c8c49a9278643133ae5aeff8d0f1413d6a8ed5"' :
                                            'id="xs-components-links-module-AppModule-098be563289e1ed2fe3d7a9e8534709ff229e90659edc04a7d09cdadef3d0f98259c948d8a393f0d4e19043389c8c49a9278643133ae5aeff8d0f1413d6a8ed5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' : 'data-target="#xs-components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' :
                                            'id="xs-components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-0b396e9db19cc772f920294156a0f5ec2f335100e57b3a2ef1cf3f6fb04deb9a221bb8ec102095a9508fc63cbe750d5cd5303863ce7375cd7a5b3a392b56ab5c"' : 'data-target="#xs-components-links-module-HomeModule-0b396e9db19cc772f920294156a0f5ec2f335100e57b3a2ef1cf3f6fb04deb9a221bb8ec102095a9508fc63cbe750d5cd5303863ce7375cd7a5b3a392b56ab5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-0b396e9db19cc772f920294156a0f5ec2f335100e57b3a2ef1cf3f6fb04deb9a221bb8ec102095a9508fc63cbe750d5cd5303863ce7375cd7a5b3a392b56ab5c"' :
                                            'id="xs-components-links-module-HomeModule-0b396e9db19cc772f920294156a0f5ec2f335100e57b3a2ef1cf3f6fb04deb9a221bb8ec102095a9508fc63cbe750d5cd5303863ce7375cd7a5b3a392b56ab5c"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SuperadministratorModule.html" data-type="entity-link" >SuperadministratorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SuperadministratorModule-905775c747fc463a9c48f65fbdeadbb3cc8ef64a83c9f7dd19197aad780ce904c76fbc436eee1ccbffe2ed7f450cdf1035dfbc51f0e37959e4020ee39531e12f"' : 'data-target="#xs-components-links-module-SuperadministratorModule-905775c747fc463a9c48f65fbdeadbb3cc8ef64a83c9f7dd19197aad780ce904c76fbc436eee1ccbffe2ed7f450cdf1035dfbc51f0e37959e4020ee39531e12f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SuperadministratorModule-905775c747fc463a9c48f65fbdeadbb3cc8ef64a83c9f7dd19197aad780ce904c76fbc436eee1ccbffe2ed7f450cdf1035dfbc51f0e37959e4020ee39531e12f"' :
                                            'id="xs-components-links-module-SuperadministratorModule-905775c747fc463a9c48f65fbdeadbb3cc8ef64a83c9f7dd19197aad780ce904c76fbc436eee1ccbffe2ed7f450cdf1035dfbc51f0e37959e4020ee39531e12f"' }>
                                            <li class="link">
                                                <a href="components/SuperadminBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminDivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminDivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminUnitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminUnitComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SuperadministratorRoutingModule.html" data-type="entity-link" >SuperadministratorRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BranchImpl.html" data-type="entity-link" >BranchImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeviceImpl.html" data-type="entity-link" >DeviceImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DivisionImpl.html" data-type="entity-link" >DivisionImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DutyTitleImpl.html" data-type="entity-link" >DutyTitleImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationImpl.html" data-type="entity-link" >LocationImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/OperationImpl.html" data-type="entity-link" >OperationImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnitImpl.html" data-type="entity-link" >UnitImpl</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Branch.html" data-type="entity-link" >Branch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Device.html" data-type="entity-link" >Device</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Division.html" data-type="entity-link" >Division</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DutyTitle.html" data-type="entity-link" >DutyTitle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Operation.html" data-type="entity-link" >Operation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Unit.html" data-type="entity-link" >Unit</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});