<script>
import $ from "jquery";

var passwordIsValid = false;
export default {
  methods: {
    validatePassword: function (
      element,
      idMensagemErro,
      idLabel,
      idElementConfirmacao
    ) {
      passwordIsValid = false;
      var $element = $(element);
      if (!$element.val()) {
        removeDetailsSuccess($element, $(idLabel), $(idMensagemErro));
        removeDetailsError($element, $(idLabel), $(idMensagemErro));
        return;
      }

      var password = element.value;
      var regexExpression = new RegExp(
        "^(?=.*[A-Z])^(?=.*[a-z])(?=.*\\d)(?=.*[@#$%!,^&+=])[A-Za-z\\d@#!$%^,&+=]{8,}"
      );

      var menorQue8 = password.length < 8;
      var senhaInvalida = !regexExpression.test(password);

      if (menorQue8) {
        addDetailsError(
          "O password precisa conter ao menos 8 caracteres",
          $element,
          $(idLabel),
          $(idMensagemErro)
        );

        return;
      }

      if (senhaInvalida) {
        addDetailsError(
          "O password precisa conter ao menos, um caracter especial, um caracter numérico, um caracter alfanumérico",
          $element,
          $(idLabel),
          $(idMensagemErro)
        );
        return;
      }

      if (
        idElementConfirmacao &&
        $(idElementConfirmacao).val() != $element.val()
      ) {
        addDetailsError(
          "Os passwords são diferentes",
          $element,
          $(idLabel),
          $(idMensagemErro)
        );

        return;
      } else{
        addDetailsSuccess($("#password"), $("#labelPassword"));
        removeDetailsError($("#password"), $("#labelPassword"), $("#mensagemErroPassword"));  
      }

      removeDetailsSuccess($element, $(idLabel), $(idMensagemErro));
      removeDetailsError($element, $(idLabel), $(idMensagemErro));

      addDetailsSuccess($element, $(idLabel));
      passwordIsValid = true;
    },
    addDetailsError: function (
      mensagemErro,
      $element,
      $idLabel,
      $idMensagemErro
    ) {
      addDetailsError(mensagemErro, $element, $idLabel, $idMensagemErro);
    },
    validateFieldEmpty(element, idMensagemErro, idLabel) {
      var $element = $(element);
      var $idLabel = $(idLabel);

      if ($element.val() != "") {
        removeClass($element, "border-danger");
        removeClass($idLabel, "text-danger");
        addClass($element, "border-success");
        addClass($idLabel, "text-success");
        $(idMensagemErro).attr("hidden", true);
      } else {
        removeClass($element, "border-danger");
        removeClass($idLabel, "text-danger");
        removeClass($element, "border-success");
        removeClass($idLabel, "text-success");
      }
    },
    isPasswordValid: function(){
      return passwordIsValid;
    },
    removeDetailsSuccess: removeDetailsSuccess,
    removeDetailsError: removeDetailsError,
    addClass: addClass,
    removeClass: removeClass
  },
};

function addDetailsSuccess($element, $idLabel) {
  addClass($element, "border-success");
  addClass($idLabel, "text-success");
}

function addDetailsError(mensagemErro, $element, $idLabel, $idMensagemErro) {
  addClass($element, "border-danger");
  addClass($idLabel, "text-danger");
  $idMensagemErro.text(mensagemErro);
  $idMensagemErro.attr("hidden", false);
}

function removeDetailsSuccess($element, $idLabel, $idMensagemErro) {
  removeClass($element, "border-success");
  removeClass($idLabel, "text-success");
  $idMensagemErro.text("");
  $idMensagemErro.attr("hidden", true);
}

function removeDetailsError($element, $idLabel, $idMensagemErro) {
  removeClass($element, "border-danger");
  removeClass($idLabel, "text-danger");
  $idMensagemErro.text("");
  $idMensagemErro.attr("hidden", true);
}

function addClass($element, className) {
  $element.addClass(className);
}

function removeClass($element, className) {
  $element.removeClass(className);
}
</script>