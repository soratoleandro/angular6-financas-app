import { Routes, RouterModule } from "@angular/router";
import { ErrorNotFoundComponent } from "./error-not-found/error-not-found.component";
import { DespesaListagemComponent } from "./despesa-listagem/despesa-listagem.component";
import { DespesaCadastroComponent } from "./despesa-cadastro/despesa-cadastro.component";
import { DespesaTipoCadastroComponent } from "./despesa-tipo-cadastro/despesa-tipo-cadastro.component";

const appRoutes: Routes = [

    { path: '', component: DespesaListagemComponent },

    { path: 'despesas', component: DespesaListagemComponent },
    { path: 'cadastrar-despesa', component: DespesaCadastroComponent },
    { path: 'editar-despesa/:id', component: DespesaCadastroComponent },

    { path: 'cadastrar-despesa-tipo', component: DespesaTipoCadastroComponent },

    { path: '**', component: ErrorNotFoundComponent }
];

export const RoteamentoModule = RouterModule.forRoot(appRoutes);