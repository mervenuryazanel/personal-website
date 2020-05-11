
    <?php 
              if (isset($_POST['fkadi'], $_POST['fsifre'] ) 
                  && ($_POST['fkadi']!='b171210069@sakarya.edu.tr')
                   && ($_POST['fsifre']!='12345')) {
                      echo "Eksik ya da yanlış kullanıcı bilgisi "; echo "<b>".$_POST['fkadi'] . ' ' . $_POST['fsifre']."</b>";
               }
               else{
                    echo"Başarıyla giriş yaptınız.";
                    echo" Hoşgeldiniz ";
                    echo $_POST["fkadi"];
                     } 
             
                     
        echo "<p> <a href='login.html'>&lt;login sayfasına geri dön&gt;</a></p> ";
                     
                ?>
