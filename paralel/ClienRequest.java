// Nama : indah puspitasari
// NIM : 20220040095
// Kelas : TI22H

import java.rmi.*;

public class ClienRequest {
    public static void main(String args[]) {
        String answer, value = "Pemrograman Terdistribusi dengan Java";
        try {
            Search access = (Search) Naming.lookup("rmi://localhost:2019/sister2019");
            answer = access.query(value);
            System.out.println("Artikel tentang " + value + " " + answer + " pada server Sister2019.");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}