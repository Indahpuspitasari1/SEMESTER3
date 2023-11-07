// Nama : indah puspitasari
// NIM : 20220040095
// Kelas : TI22H

import java.rmi.*;
import java.rmi.registry.*;

public class SearchServer {
    public static void main(String args[]) {
        try {
            Search obj = new SearchQuery();
            LocateRegistry.createRegistry(2019);
            Naming.rebind("rmi://localhost:2019/sister2019", obj);
            System.out.println("Server telah dimulai...");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}