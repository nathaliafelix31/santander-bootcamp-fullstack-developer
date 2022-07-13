public class Main {

    public static void main(String[] args) {
        Cliente nathalia = new Cliente();
        nathalia.setNome("Nathalia");

        Conta cc = new ContaCorrente(nathalia);
        Conta poupanca = new ContaPoupanca(nathalia);

        cc.depositar(500);
        cc.transferir(500, poupanca);

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();
    }

}