# Results

### Success

* Both [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) and [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) constructs responded to gold concentrations in a dose-responsive manner up to 1uM 
* [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) is more responsive to gold than copper
![alt text](http://parts.igem.org/wiki/images/6/60/Igem_2016_Gold_Copper_Cell_Assay.jpeg)
<center>*Figure 1: CPRG assay results after 12 hours of incubation*</center>

* [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) is more responsive to both gold and copper concentrations than York 2013 construct (BBa_K1127008)

### Discussion

The iGEM Toronto 2016 team was successful at modifying an naturally existing transcription factor called GolS (natively found in *Salmonella enterica*) to contain certain mutations that have been found to cause CueR (a copper-response factor in *Escherichia coli*)to increase sensitivity to gold and significantly decrease it's sensitivity to copper. This modification was due to an amino acid change from proline to alanine at site 118. This successful synthetic change can be found composite BioBricks, [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) compared to the unchanged [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001). For further details on what is contained in the Long GolS P118A BioBrick, see Figure 1.

![alt text](http://parts.igem.org/wiki/images/4/49/GolSP118APlasmid.png)<center>*Figure 1: The content and structure of the [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) BioBrick plasmid*</center>

To characterize our plasmids, we compared the expression levels of our [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) and [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) against [York 2013's GolS (BBa_K1127008)](http://parts.igem.org/Part:BBa_K1127008) and a DH10\beta with varying concentrations of gold and copper. 

Figure 2 shows the 96-well plate that was used in our BioBrick characterization. First comparing our constructs to Yorks, our GolS [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) was able to more strongly express LacZ in both presence of gold and copper compared to York 2013's GolS [(BBa_K1127008)](http://parts.igem.org/Part:BBa_K1127008). This can be determined by how wells G1 through G5 are more red in comparison to wells E1 through E5 for gold and C1 through C5 compared against A1 through C5 for copper. 

![alt text](http://parts.igem.org/wiki/images/6/60/Igem_2016_Gold_Copper_Cell_Assay.jpeg)
<center>*Figure 2: CPRG assay results after 12 hours of incubation*</center>

Secondly, when looking at the assay, the degree of how red a well is becomes weaker or more ywllow after 0.5\muM. We expected to see a linear increase correlated to increase in the concentration. However, instead, we observed a sudden decrease in expression levels after 0.5uM (Figure 3). This became more pronounced over time, resulting a Range Detector Circuit. We suspect that there is an inherent edge that represses the expression after a certain threshold. This would produce the circuit shown in Figure 4. We speculated that this effect might be minimum for cell free extracts that contain minimal enzymes.

![alt text](http://parts.igem.org/wiki/images/1/11/2016_iGem_Toronto_GolS_2D.png)
<center>*Figure 3: 2D Absorbance graph for CPRG assa*</center>

![alt text](http://parts.igem.org/wiki/images/6/60/Igem_2016_Circuit_Diagram.png)
<center>*Figure 4: Computational explanation for the CPRG assay*</center>

Thirdly, using plate reader results and normalizing OD, we were able to compare our GolS [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) and GolS P118A [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) constructs. Figure 5 shows the GolS [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) construct was more responsive to gold than it was to copper at 1\muM of each metal sample. After 5 hours, the ratio between gold expression to copper expression was around 1.14 up to 1.99 at 16 hours. Figure 6 shows the GolS [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) construct change in expression in the presence and response to gold over time. 

![alt text](http://parts.igem.org/wiki/images/thumb/e/e8/GolS_Expression_of_Au%283%29_vs_Cu%282%29.png/800px-GolS_Expression_of_Au%283%29_vs_Cu%282%29.png)
<center>*Figure 5: A comparison of the OD-noramlized expression of GolS in the presence of and response to Au(3) and Cu(2). This is at 1\muM at 12 hours passed.*</center>

![alt text](http://parts.igem.org/wiki/images/thumb/e/e8/GolS_Expression_of_Au%283%29_vs_Cu%282%29.png/800px-GolS_Expression_of_Au%283%29_vs_Cu%282%29.png)
<center>*Figure 6: GolS BBa_K2048002 changes in expresison in the presence of and response to Au(3) over 16 hours. The X-axis is the concentration of gold in \muM. The Y-axis is the hours passed since the start of the assay. The Z-axis is the OD-Noramlized.*</center>

Finally, for the GolS P118A expression in response to gold compared to copper, 


### Not so successful

* Cell-free assay required more time and troubleshooting.

### Future plans

* Make cell-free assays work.


<!--INGORE THIS STUFF, THIS FOR ME TO FINISH LATER WHEN I HAS ALL EXCEL FILES-->



<!--These 
Here you can describe the results of your project and your future plans.

What should this page contain?

*   Clearly and objectively describe the results of your work.
*   Future plans for the project
*   Considerations for replicating the experiments

Project Achievements

You can also include a list of bullet points (and links) of the successes and failures you have had over your summer. It is a quick reference page for the judges to see what you achieved during your summer.

*   A list of linked bullet points of the successful results during your project
*   A list of linked bullet points of the unsuccessful results during your project. This is about being scientifically honest. If you worked on an area for a long time with no success, tell us so we know where you put your effort.

Inspiration

See how other teams presented their results.

*   [2014 TU Darmstadt](http://2014.igem.org/Team:TU_Darmstadt/Results/Pathway)
*   [2014 Imperial](http://2014.igem.org/Team:Imperial/Results)
*   [2014 Paris Bettencourt](http://2014.igem.org/Team:Paris_Bettencourt/Results)
-->
