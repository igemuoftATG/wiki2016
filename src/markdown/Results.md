# Results

### Success

* Both [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) and [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) constructs responded to gold concentrations in a dose-responsive manner up to 1uM 
* [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) is more responsive to gold than copper
* [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) is more responsive to both gold and copper concentrations than York 2013 construct (BBa_K1127008)
* [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) was found to be significnatly more response to gold than it is to copper

### Lack of success

* Cell-free assay required more time and troubleshooting

### Future plans and direction

* Make [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) and [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) work in a cell-free environment 
* Integrate that cell-free environment onto a paper-based system (first fresh paper-based system and then freeze-dried paper-based system) 

### Discussion

The iGEM Toronto 2016 team was successful at modifying an naturally existing transcription factor called GolS (natively found in *Salmonella enterica*) to contain certain mutations that have been found to cause CueR (a copper-response factor in *Escherichia coli*)to increase sensitivity to gold and significantly decrease it's sensitivity to copper. This modification was due to an amino acid change from proline to alanine at site 118. This successful synthetic change can be found composite BioBricks, [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) compared to the unchanged [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001). For further details on what is contained in the Long GolS P118A BioBrick, see Figure 1.

![alt text](http://parts.igem.org/wiki/images/4/49/GolSP118APlasmid.png)<center>*Figure 1: The content and structure of the [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) BioBrick plasmid*</center>

To characterize our plasmids, we compared the expression levels of our [Long GolS P118A (BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) and [Long GolS (BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) against [York 2013's GolS (BBa_K1127008)](http://parts.igem.org/Part:BBa_K1127008) and a DH10\beta with varying concentrations of gold and copper. 

Figure 2 shows the 96-well plate that was used in our BioBrick characterization. First comparing our constructs to Yorks, our GolS [(BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) was able to more strongly express LacZ in both presence of gold and copper compared to York 2013's GolS [(BBa_K1127008)](http://parts.igem.org/Part:BBa_K1127008). This can be determined by how wells G1 through G5 are more red in comparison to wells E1 through E5 for gold and C1 through C5 compared against A1 through C5 for copper. This can also be visualized in Figure 3 where the assay was at 24 hours. 

![alt text](http://parts.igem.org/wiki/images/6/60/Igem_2016_Gold_Copper_Cell_Assay.jpeg)
<center>*Figure 2: CPRG assay results after 12 hours of incubation*</center>

![alt text](https://camo.githubusercontent.com/f0b8b9438168bfd9b296bfdbe408287abb0c42c4/687474703a2f2f70617274732e6967656d2e6f72672f77696b692f696d616765732f362f36642f4967656d5f323031365f476f6c645f436f707065725f43656c6c5f41737361795f322e6a706567)
<center>*Figure 3: CPRG assay results after 24 hours of incubation*</center>

Secondly, when looking at the assay, the degree of how red a well is becomes weaker or more yellow after 0.5\muM. We expected to see a linear increase correlated to increase in the concentration. However, instead, we observed a sudden decrease in expression levels after 0.5uM (Figure 4). This became more pronounced over time, resulting a Range Detector Circuit. We suspect that there is an inherent edge that represses the expression after a certain threshold. This would produce the circuit shown in Figure 5. We speculated that this effect might be minimum for cell free extracts that contain minimal enzymes.

![alt text](http://parts.igem.org/wiki/images/1/11/2016_iGem_Toronto_GolS_2D.png)
<center>*Figure 4: 2D Absorbance graph for CPRG assay*</center>

![alt text](http://parts.igem.org/wiki/images/6/60/Igem_2016_Circuit_Diagram.png)
<center>*Figure 5: Computational explanation for the CPRG assay*</center>

Thirdly, we  compared our GolS [(BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) and GolS P118A [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) constructs response to and in the presence of gold and copper. Based on observations of 12 hours (Figure 2) and 24 hours (Figure 3), it is visible that the GolS [(BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) from G1 through G5 (the Au(3) concentrations) is darker red compared to C1 through C5 (the Cu(2) concentrations). The visible significant difference in the darker shades of red for the gold concentration wells compared to copper indicates that our constructs are far more sensitive to gold than it is to copper. Figure 6 shows the GolS [(BBa_K2048001)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001) construct change in expression in the presence and response to gold over time. 

![alt text](http://parts.igem.org/wiki/images/thumb/a/a2/Gols_16_hours.png/800px-Gols_16_hours.png)
<center>*Figure 6: GolS (BBa_K2048001) changes in expresison in the presence of and response to Au(3) over 16 hours. The X-axis is the concentration of gold in \muM. The Y-axis is the hours passed since the start of the assay. The Z-axis is the absorbance.*</center>

Finally, for the GolS P118A [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) expression in response to and presence of gold compared to copper, both the assay after 12 hours (Figure 2) and 24 hours (Figure 3) show that the GolS P118A [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) is more sensitive to gold than it is against copper. The visible red in the copper wells are minimal indicating that it appears our amino acid change was successful at significantly decreasing the sensitivity of the genetic circuit expression in the presence of copper. Figure 7 shows the GolS P118A [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) construct change in expression in the presence and response to gold over time.

![alt text](http://parts.igem.org/wiki/images/8/8d/P118a_over_16_hours.png)
<center>*Figure 6: GolS P118A (BBa_K2048002) changes in expresison in the presence of and response to Au(3) over 16 hours. The X-axis is the concentration of gold in \muM. The Y-axis is the hours passed since the start of the assay. The Z-axis is the absorbance.*</center>

Unfortunately, our cell-free assay did not work and we would have required more time to troubleshoot our protocol to determine why it did not success. A possible reason for our lack in success in our cell free assays was that we found that the [NEB PureExpress](https://www.neb.com/products/e6800-purexpress-invitro-protein-synthesis-kit) (a cell-free transcription and translation system for *E. coli* translation) may have required modifications towards plasmids/BioBricks (such as possibly including a T7 promoter). Please refer to the notebook section for what we attempted to do. 

A future direction this research may encourage is to take our GolS P118A [(BBa_K2048002)](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002) BioBrick and be able to create a cell-free paper-based system as it would allow an alternative, cheap and quick method for the detection of gold. Our BioBrick has already been modified ([Gols P118A, BBa_K2048002](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048002)) and characterized to have a decreased sensitivity to copper compared to its unmodified version ([GolS, BBa_K2048001](http://parts.igem.org/wiki/index.php?title=Part:BBa_K2048001)).


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
