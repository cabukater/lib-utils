import { Injectable, Output, EventEmitter, Input } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alerts: any[] = [];
  @Input()
  count = 'teste'
  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
 @Input ('textAlertCustom') texAlertCustom: string;
  
  add(alert: any) {
    this.alerts.push(alert);
  }

  remove(id: string) {
    this.alerts = this.alerts.filter(x => x.id !== id);
  }

  errorAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Ocorreu um erro',
      footer: 'Se persistir contate o administrador'
    })
  }

  successAlert() {
    Swal.fire({
      icon: 'success',
      title: 'sucesso',
      text: 'Solicitação realizada com sucesso'
    })
  }

  warningAlert() {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Essa Ação não poderá ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Não, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.swalWithBootstrapButtons.fire(
          'Deletado!',
          'Seu arquivo foi deletado.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.swalWithBootstrapButtons.fire(
          'Cancelado',
          'Não foi realizada alteração:)',
          'error'
        )
      }
    })
  }

  closeAlert() {
    Swal.close()
  }

  loadingAlert() {
    Swal.fire({
      title: 'Carregando Informações!',
      timerProgressBar: true,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })
  }

  successAlertCustom() {
    Swal.fire({
      icon: 'success',
      title: 'sucesso',
      text: this.texAlertCustom
    })
  }
}