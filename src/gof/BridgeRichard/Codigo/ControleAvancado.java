package gof.BridgeRichard.Codigo;

public class ControleAvancado extends ControleBasico{

    public ControleAvancado(Dispositivo dispositivo) {
        super(dispositivo);
    }
    
    public void mudo(){
        dispositivo.setVolume(0);
        System.out.println("\nMudo Ativado!");
    }
}
