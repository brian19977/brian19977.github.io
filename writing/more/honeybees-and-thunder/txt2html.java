import java.util.*;
import java.lang.*;
import java.io.*;

public class txt2html {
    public static void main(String[] args) {
        for(int i = 0; i < args.length; i++) {
            try {
                File f = new File(args[i]);
                Scanner sc = new Scanner(f);

                // new file with same name minus `.txt`
                FileWriter fw = new FileWriter(args[i].substring(0, args[i].length() - 4));

                boolean openItalic = true;
                boolean openQuotation = true;
                boolean title = true;

                while(sc.hasNextLine()) {
                    String sNoEmdash = sc.nextLine();
                    String s = sNoEmdash.replaceAll(" -- ","—");
                    

                    // If blank line, skip
                    if(s.length() == 0)
                        continue;

                    // First line is title styling
                    if(title == true) {
                        StringBuilder sb = new StringBuilder("<p class=\"section\">");
                        sb.append(args[i].charAt(0)); // ch number is in filename
                        sb.append(": ");
                        
                        // docx2txt puts weird junk at the start of first line
                        // skip thus
                        int start = 0;
                        do {
                            if(Character.isAlphabetic(s.charAt(start)))
                                break;
                            start++;
                        } while(true);

                        sb.append(s.substring(start, s.length() - 1)); // minus one for underscore at the end
                        sb.append("</p>\n");

                        fw.write(sb.toString());
                        title = false;
                        continue;
                    }

                    // Page break: count 3 occurrences of `*`
                    if(s.chars().filter(ch -> ch == '*').count() == 3) {
                        StringBuilder sb = new StringBuilder("<p style=\"text-align: center;\">\n");
                        sb.append("*&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;\n");
                        sb.append("</p>\n");

                        fw.write(sb.toString());
                        continue;
                    }
              
                    // Start with an opening <p> tag
                    StringBuilder sb = new StringBuilder("<p>");

                    for(int j = 0; j < s.length(); j++) {
                        switch (s.charAt(j)) {
                            case '_':
                                if(openItalic == true) {
                                    sb.append("<span style=\"font-style: italic;\">");
                                    openItalic = false;
                                } else {
                                    sb.append("</span>");
                                    openItalic = true;
                                }

                                break;
                            
                            case '\"':
                                if(openQuotation == true) {
                                    sb.append("“");
                                    openQuotation = false;
                                } else {
                                    sb.append("”");
                                    openQuotation = true;
                                }

                                break;
                            
                            case '`':
                                sb.append('‘');
                                break;
                            case '\'':
                                sb.append('’');
                                break;
                            case '\t':
                                break;
                            
                            default:
                                sb.append(s.charAt(j));
                                break;
                        }
                    }

                    sb.append("</p>\n");

                    fw.write(sb.toString());              
                }

                fw.close();
                
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}