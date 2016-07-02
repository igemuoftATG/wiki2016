# Making Gold Green - A Synthetic Approach to Gold Biosensing

### Abstract

By creating a synthetic biological sensor, we can use it as an affordable, environmentally friendly, and scalable method for detecting gold. We will build cellulose paper with GolS, a transcriptional activator that can express the reporter gene LacZ in presence of gold. The activity of the LacZ can be visualized by a colour change on the paper to purple. This device will allow for a quick, easy and affordable method of detecting gold in soil and water samples. We will also create a mobile app that will use colourimetric analysis to determine the concentration of gold in the sample via the built-in smart phone camera. Along with the mobile app, we intend on designing a pipeline to discover novel gene clusters that are homologous in function to gold resistance and gold accumulation genes to discover new genes and operons that can be used as a green approach to the mining industry. The biosensing aspects can work to replace the existing gold detection methods in the mining industry as an affordable and green synthetic biology approach.

### Introduction

Biological methods can be used to detect1,2,3,4 metal ions, complexes and nanoparticles. Biosensing refers to a collection of techniques which utilize existing biological pathways and complexes to detect specific metals in various samples, such as those from soil5 and drinking water6. Biosensing has been found to occur in relation to iron, zinc, copper, silver, gold7,8 and cadmium2.

        Here, we propose an environmentally-friendly approach to biosensing through design and implementation of novel synthetic biology solutions for the mining industry. By creating cell-free paper-based biosensors, we intend to develop a quick, easy and affordable method for detection of gold in soil samples. Our team plans on tackling through use of a transcriptional activator, GolS, and its variants, which induce their associated reporter genes in the presence of gold ions. These reporter genes will be selected to act as visual indicators. Our computational team will augment this project by engineering a smartphone application for colourimetric analysis. This will be done using the smartphone’s camera input of the visual indicators to estimate the amount of gold present in a sample. The computational team will also be creating a pipeline to identify gene clusters related to a given function of interest. This data mining module will allow its user to search for homologous gene clusters as potential gold resistant or accumulation genes like alternatives to the del cluster9.

## The Use of a Cell-Free Synthetic-Based Bioactive Paper for Detection of Gold

Alexander Sullivan, Quynh Cao, Hamed Tinafar, Marc Li, Katariina Jaenes, Tam Pham, Zarifa Omar Ali, Karim Sarif, Bohdan Lukach, Celine Zhang, Seray Cicek

### Background

The current methods of gold detection are expensive and time-consuming as they rely on special immobile equipment and facilities. These are often not easily accessible for the analysis of samples taken in remote areas. In contrast, the use of a cell-free bioactive paper creates an easily accessible tool that’s easily transported, due to the small size of the existing transcriptional and translational machinery that is utilized to cause a visual change as a result of gold presence within specific samples. Additionally, they provide the benefit of being immensely low cost (as low as $0.02 per sensor), while providing rapid results (ranging from minutes to couple of hours)10.

With the use of visual indicators, such as LacZ or green fluorescent protein (GFP), these biosensing papers can be used to detect the presence of gold (or other desired ions, nanoparticles or complexes) in soil samples or test solutions. These visual indicators would be expressed when gold nanoparticles bind to engineered transcriptional regulators, allowing for increased transcription of their genes. The visual indicator LacZ would be the optimal choice as it is visible to the eye, bypassing the need for extra time and expenses associated with offsite analysis for fluorescent indicators. This method can also be applied by governments or private companies with limited resources as it does not rely on expensive and fragile equipment.

In a recent study, Keith Pardee and his colleagues have demonstrated the feasibility of bioactive papers as a platform and medium for genetic circuits11. By supplementing Escherichia coli extract with amino acids and a plasmid construct, the authors were able to demonstrate the functional expression of the protein encoded in the plasmid. The transcriptional/translational activity of the paper-based platform remained functional for over a year after storage at room-temperature, once the paper was freeze-dried. We propose to utilize a modified version of the transcriptional activator, GolS, as a novel method of gold detection.

GolS is a gold-binding transcriptional regulator, natively found in the gram-negative bacteria Salmonella enterica. In the presence of gold, GolS induces the activation of the gol gene cluster by binding to the pGolB promoter, which instigates transcription of three proteins involved in mediating gold resistance12. The Gol cluster has been expressed in E. coli13. In addition, it has been shown that by fusing a promoterless LacZ construct to pGolB, E. coli is able to express the LacZ reporter in the presence of gold-associated GolS in a concentration-dependent manner. Thus, LacZ activity can be used to indirectly measure the concentration of gold in the environment12.

A major problem with using GolS in a biosensing circuit is its cross-reactivity with other metal ions – in particular, Cu(I). GolS belongs to the MerR family of transcriptional activators, which also include CueR (part of the MerR regulator of E. coli). Studies have shown that these sensors coordinate metal ions using conserved C112 and C120 residues located on their metal-binding sites, which are CAGDALPD and  CPGDDSADC for GolS and CueR respectively. Due to this, they share similar affinities for Cu(I). However, transcriptional activity of these regulators does not rely on their metal binding affinity, but rather on the ability of the metal ions to properly activate them through inducing conformational change favorable to pGolB binding. Previous studies have shown that it is possible to bio-engineer gold-binding transcriptional activators to become “insensitive” to Cu(I)12. Replacing A113 in GolS with T113 (similar to that in CupR of Cupriavidus metallidurans, a gold-resistant bacterium, with metal binding site CTGDDRPDC) maintains response to gold, while reducing response to copper. Moreover, inserting A118 in place of L118 in a modified GolS can make it almost insensitive to copper, while only slightly decreasing its selectivity for gold. Thus, we propose the following design strategies to modify GolS:

1. Changing residue 113 in GolS from A to T (A113T);
2. Changing residue 118 in GolS from P to A (P118A); and/or
3. Using CupR (Rmet_3523) from Cupriavidus metallidurans12.

A potential problem with the cell-free biosensing paper is that it requires the freeze-drying of the paper prior to storage. The freeze-thaw process may result in aggregation and denaturation of the proteins required for the proper function of the genetic circuit. We believe that this is not an issue for the transcriptional regulator GolS. It is known that proteins in the MerR family constitutively bind to the promoter of their regulated gene products, creating a slight bend in the double helix structure to inhibit the activity of RNA polymerase. Hence, there is a high probability for DNA-protein interaction to be more stable than GolS protein alone during the freeze drying process14. In addition, GolS most likely exists in the dimeric form due to its high affinity to the DNA promoter, so the protein itself is hypothesized to be resistant to cold denaturation and aggregation.

### Hypothesis/Goals 

We propose to use a modified version of GolS in order to create a cell-free paper-based biosensor specific to gold. GolS mutants (A113T and/or P118A) will be tested separately to minimize the cross-binding affinity of Cu(I) to GolS before the transfer into the cellulose paper wells. The reporter gene LacZ will be fused to a GolS-regulated promoter, and this construct will be implemented in the paper-based platform as discussed above. In the presence of Au(I), GolS binding of the promoter will lead to the expression of LacZ, the activity of which can be visualized by a colour change to purple. This colour change will then used as an indicator of gold present in the sample.

### Experimental Methods 

1.  Design five recombinant plasmids, each consisting of:

2.  A LacZ reporter gene fused to the GolB promoter
3.  One of the following variations of GolS gene fused to a LacI promoter:


1. Wild-type Salmonella enterica GolS
2. Modified Salmonella GolS­A113P
3. Modified Salmonella GolSP118A­
4. Modified Salmonella double-mutant GolSA113P, P118A
5. ­Modified Salmonella with Cupriavidus metallidurans metal-binding site

6. Transform plasmid into competent E. coli K12 to heterologously express GolS and its variants

7. Lyse E. coli using chemical detergents15

8. Supplement cell extract with free amino acids, DNase inhibitors and RNase inhibitors

9. Freeze dry and store in room temperature (up to a year)

10. Test detection with aqueous gold chloride

11. Add buffer to neutralize pH
12. Add water to rehydrate and activate the paper
13. Observe colour change


## Colourimetric Analysis through Creation of a Novel Phone Application

Katariina Jaenes, Fahim Shahreer,  Heba Farookhi, Anthony Zhao

We will create a smartphone app that will quantify expression of the reporter gene using colourimetric analysis of the embedded LacZ switch system pioneered by Keith Pardee and his colleagues11. If the test sample applied to the paper contains gold, LacZ will cleave the yellow chlorophenol red-β-D-galactopyranoside substrate within the paper wells, resulting in a purple chlorophenol red product11. Thus, by taking a smartphone camera image, we can quantify reaction progress through comparing the ratio of yellow to purple in the final product. Given specific input information, the app will perform image processing, colour analysis, and estimation of reporter gene expression.

When opening the app, the user will be prompted to designate the following configurations: the aspect ratio of the bioactive paper, the (labelled) number of rows and columns within the wells, the row-column coordinate for the well containing only yellow pigments, and colour of the expected pigment in the induced system in Red-Green-Blue (RGB) or hexadecimal (hex). These values will be used in the following three major steps: A) Image processing, B) Colour analysis, and C) Approximating the relative expression of the reporter gene.

1. Image Processing

Using image processing capabilities, our app will edit and rearrange the photo in order to increase the efficiency of colour analysis. The aspect ratio of the paper will be used to construct a translucent frame in the camera’s live preview mode to assist the user in framing the paper, and everything outside the frame will then be cropped using the cropping method found in the OpenCV library.

B.        Colour Analysis

In order to ensure accuracy in colourimetric analysis, colour values must be reproduced with high fidelity. Thus, any colour distortions from the true values due to ambient light must be adjusted for. To account for these issues, our app will apply the Robust Auto White-Balance API developed by Huo et al (2006)16.

Given the space assigned for hydrophobic barriers within the bioactive paper, analyzing colour properties for the entire image would be redundant. To ensure that only the coloured paper wells with synthetic gene networks are being analyzed, we will create separate segments for the paper wells using the GrabCut algorithm from the OpenCV library and insert the image segment of each disk into a 2D array corresponding to the number of rows and columns in the paper. First, our app will prompt the user to manually enter the colour of the printed hydrophobic barrier or prompt them to mark a border around a disk with an on-screen drawing tool. The GrabCut method allows the user to specify a boundary box around the object of interest, which is then used to approximate the colour distribution of the object with its background and compare it to nearby pixels in a recursive fashion. The standard RGB (sRGB by default) colour values of the segments will then be converted to Lightness Chroma and Hue (LCH) colour space. We will use the LCH colour space for colour analysis. We have chosen LCH colour space because it is device-independent, convertible from RGB, and it allows us to manipulate the lightness and chroma of a colour with ease (unlike RGB where lightness is a product from each channel and difficult to manipulate).

In addition, our app will improve on the Image Colour Summarizer API developed by Martin Krzywinski, which uses K means clustering to calculate the average colour hue, saturation and value in the image, as well as the concentration of the most abundant colours present in the image. First, this API will be used to calculate the average colour values in the disk with only yellow LacZ substrate, thereby establishing our base colour. Our team will then modify this API so that it can collect concentrations of colours within a certain range of lightness (L value) and chroma (C value) from the base colour. This will allow us to negate the effects of small variations in lightness and saturation for either yellow or purple pigments. The API will be further modified to take into account the additive values of two colours (i.e. yellow and purple), and approximate how much of each colour is present in the mix. This would be effective given that a pixel takes a colour of neither purple nor yellow, but a mix of the two (due to low resolution.) By accounting for these potential errors in determining the colour of the pixels, we will increase the accuracy of our colourimetric analysis.

C.         Relative Gol Expression

Based on the colorimetric analysis performed on each cell of the array in the final image as well as the ratio of purple to yellow (in the pure yellow substrate), concentrations will be stored in another 2D array of the same size and printed to the user. As the proportion of purple pigments in a well would correspond to the amount of chlorophenol red-β-D-galactopyranoside cleavage by LacZ, the ratio value would indicate the relative amount of expression of the reporter gene.

Moving forwards, this app can easily be used for colorimetric analysis of any set of colours in a one-to-one colour change, as the base colour is determined from the image directly and so has applicability beyond the LacZ system. Similarly, the expected pigment produced when the system is activated may also be ascertained directly from the image. In addition, the input required for the substrate colour can be made more specific if the user knows the wavelength at which the product has absorbance. This absorbance value can be converted to its corresponding reflectance, and finally converted to XYZ colour space, thus enabling us to approximate the product’s colour. This will allow the user to get highly accurate results for many different product substrates. To illustrate, our app could be useful in quantifying reaction progress for glucose assays involving iodine, where the colour change would be from clear to brown, and protein assays, where a yellow to blue colour change occurs upon Tetrabromophenol Blue (TBPB) binding to protein17. In these cases, our app would also use respective colour concentrations to approximate the concentration of the test analyte.

Practically speaking, the key strength of this project lies in portability and low expenses, as no auxiliary devices will be needed other than a standard smartphone. However, one issue that may arise during app development is the increased amount of time and memory required for processing and analyzing colour in high resolution images, which we could address effectively by applying machine learning algorithms for image quantization such as K-means clustering. Overall, through this app, the computational team proposes to create a system that will make colourimetric analysis simple and efficient for a layperson, and would be an invaluable tool for on-the-go testing when used in combination with paper-based biosensors11.

## Data mining gold resistance gene clusters with deep learning

Heba Farookhi, Fahim Shahreer, Anthony Zhao

Advances in high-throughput sequencing technologies has led to a huge increase in genomic data and publically available databases for it. Consequently, computational and systematic studies of such data has lead to many discoveries in the field of genomics, medicine, and biomedical engineering, among other fields. Here, we propose to develop a novel data mining pipeline for discovering gene clusters of specific functions. Specifically, we will be using our pipeline to mine for an alternative to the del cluster and other gold resistance genes in bacteria. The del cluster encodes enzymes responsible for the production of delfibactin in the bacterium Delftia acidovorans, which can be used for the efficient recovery of solid gold from a solution9. Our data mining pipeline will use hidden Markov model (HMM) profiles for gene annotation, and we will develop a novel method for detecting gene clusters by using a recurrent neural network. Lastly, we will create phylogenetic trees at the gene level for our targets, providing insight in their evolutionary trajectories.

We will first build a database of all prokaryotic genomic data from NCBI. We will then BLAST each gene from the del cluster against our database and use the top hits to create a hidden-Markov model (HMM) profile using HHpred18,19. Additionally, we will create a HMM profile for evolutionary related gold resistance genes, such as the gol cluster. Subsequently, we will annotate genes in our database with our HMM profiles using HMMER20. Using a HMM as an alternative to BLAST can better capture genes that are dissimilar in sequence, but homologous in function. Gene clusters/operons are especially well conserved in prokaryotes. Due to its high level of conservation in synteny, we will use a recurrent neural network to detect and cluster similar gene operons or clusters together21. We will explore different models and architectures of recurrent neural networks in search for the best identification method for gene clusters. Finally, we will create phylogenetic trees at the gene level using various methods, including using multiple sequence alignment, maximum parsimony, and maximum likelihood22,23. Trees generated will help us observe the evolutionary trajectories of our gene clusters, providing more confident predictions in our pipeline and to better identify potential species of interest.

Ultimately, our pipeline will be used for discovering novel gene clusters that are homologous in function. Specifically, our pipeline will produce potential gene cluster targets that can serve as alternatives to the del cluster and other gold resistance genes.

### Conclusion

In this project, we plan to bring cutting-edge synthetic biology to exploration and mining for gold. By designing a paper-based detection system, we aim to create a low-cost, portable and environmentally-friendly addition to current gold exploration techniques, capable of providing rapid results in an unprecedented manner. In doing so, we seek to perfect the currently proposed biological sensing circuits, by increasing specificity and modularity. In addition, we will create a mobile app that will determine the concentration of gold in a given sample by using the built-in phone camera to perform colourimetric analysis. We will also use data mining to design a pipeline for discovering novel genes. This can be used to find gene clusters homologous to known gold resistance and accumulation genes, which could be used as an environmentally-friendly method to precipitate gold. These aspects can work together to replace the existing gold detection and mineralization methods in the mining industry as an affordable and green biology approach.

**Acknowledgements**

We would like to give special thanks to the following people for their assistance in the development of this proposal and the support they gave towards its progress: Dennis McCormac, Alistair Dias, Naveen Venayak, Kayla Nemr, Umar Owadally, Pavel Shmatnik, Mark Wang, Hwiwon Jang and Ben Couillard. We would also like to thank Ontario Genomics, University of Toronto and iGEM Toronto.

**Bibliography**

1. Huang PJH, Liu J. 2016. An ultrasensitive light-up Cu2+ biosensor using a new DNAzyme cleaving a phosphorothioate-modified substrate. Analytical Chemistry. 88:3341-3347.
2. Tang RH, Yang H, Choi JR, Gong Y, Feng SS, Pingguan-Murphy B, Huang QS, Shi JL, Mei QB, Xu F.  2016.  Advances  in  paper-based  sample  pretreatment  for  point-of-care  testing.  Critical Reviews in Biotechnology. 1-18.
3. Fang Z, Huang J, Lie P, Xiao Z, Ouyang C, Wu Q, Wu Y, Liu G, Zeng L. 2010. Lateral flow nucleic acid biosensor Cu 2+  detection in aqueous solution with high sensitivity and selectivity. Chemical Communications. 46(47):9043-9045.
4. Vijitvarasan P, Oaew S, Surareungchai W. Paper-based scanometric assay for lead ion detecting using DNAzyme. Analytic chimica acta. 2015;896:152-159.
5. Sicard  C,  Brennan  JD.  2013.  Bioactive  paper:  biomolecule  immobilization  methods  and applications in environmental monitoring. MRS bulletin. 38(4):331-334.
6. Su  J,  Xu  J,  Chen  Y,  Xiang  Y,  Yang  R,  Chai  Y.  2013.  Sensitive  detection  of  copper(II)  by  a commercial glucometer using click chemistry. Biosensors and Bioelectronics. 45:219-222.
7. Dhami  NK,  Reddy  MS,  Mukherjee  A.  2013.  Biomineralization  of  calcium  carbonates  and  their engineered applications: a review. Frontiers in Microbiology. 4(314):10-3389.
8. Satola B, Wubbeler JH, Steinbuchel A. 2013. Metabolic characteristics of the species Variovarax paradoxus. Applied microbiology and biotechnology. 97(2):541-560.
9. Eils R, Ventura BD, Georgi F, Meyer H, Niopek D, Adlung L, Heinemann T, Genreith K, Meyer H, Christiansen T, Rabe S, Ignatiadis N, Kurzawa N, Riedel A, Herbst K, Sachs J, Kats I, Walch P, Meichsner J, Schessner J, Schmidt F, Beer R. Gold Recycling Using Delftibactin to Recycle Gold from Electronic Waste. [Internet] Heidelberg (BW): Heidelberg University - Heidelberg; 2013 Oct 29 [cited 2016 Feb 16]. Available from[ ](https://www.google.com/url?q=https://www.google.com/url?q%3Dhttp://2013.igem.org/Team:Heidelberg/Project/Delftibactin%26amp;sa%3DD%26amp;ust%3D1467427713620000%26amp;usg%3DAFQjCNGkC9F4epjZeh8ShR_VwyEDEk7nrQ&sa=D&ust=1467427713654000&usg=AFQjCNGlN0xndn1_Lb5XHviDSm01o2FQkA)[http://2013.igem.org/Team:Heidelberg/Project/Delftibactin](https://www.google.com/url?q=https://www.google.com/url?q%3Dhttp://2013.igem.org/Team:Heidelberg/Project/Delftibactin%26amp;sa%3DD%26amp;ust%3D1467427713620000%26amp;usg%3DAFQjCNGkC9F4epjZeh8ShR_VwyEDEk7nrQ&sa=D&ust=1467427713654000&usg=AFQjCNGlN0xndn1_Lb5XHviDSm01o2FQkA).
10. Pontel LB, Audero MEP, Esparize M, Checa SK, Soncini FC. 2007. GolS controls the response to gold by the hierarchical induction of Salmonella-specific genes that include a CBA efflux-coding operon. Molecular microbiology. 66(3):814-825.
11. Pardee K, Green AA, Ferrante T, Cameron DE, DaleyKeyser A, Yin P, Collins JJ. 2014. Paper-based synthetic gene networks. Cell. 159(4):940-954.
12. Ibanez MM, Cerminati S, Checa SK, Soncini FC. 2013. Dissecting the Metal Selectivity of MerR Monovalent Metal Ion Sensors in Salmonella. Journal of Bacteriology. 195(13):3084-3092.
13. Wei W, Zhu T, Wang Y,  Yang H, Hao Z, Chen  PR,  Zhao J.  2013. Engineering a gold-specific regulon for cell-based visual detection and recovery of gold. Chemical Science. 3(6):1780-1784.
14. Hobman  JL.  2007.  MerR  family  transcription  activators:  similar  designs,  different  specificities. Molecular microbiology. 63(5):1275-1278. 21.
15. Eccles:  Protein  Lysates  from  Cells  in  Culture.  OpenWetWare  (2007).  Available  at: http://openwetware.org/wiki/Eccles:Protein_Lysates_from_Cells_in_Culture. (Accessed: 11th May 2016)
16. Huo JY, Chang YL, Wang J, Wei XX. 2006. Robust automatic white balance algorithm using gray colour points in images. Consumer Electronic. 52(2):541-546.
17. Martinez  AW,  Phillips  ST,  Butte  MJ,  Whitesides  GM.  2007.  Patterned  paper  as  a  platform  for inexpensive,  low-volume,  portable  bioassays.  Angewandte  Chemie  International  Edition. 46(8):1318-1320.
18. Altschup SF, Gish W, Pennsylvania T, Park U. 1990. Basic Local Alignment Search Tool. Journal of Molecular Biology. 215(3):403–410.
19. Soding J, Biegert A, Lupas AN. 2005. The HHpred interactive server for protein homology detection and structure prediction. Nucleic Acids Research. 33:W244–W248.
20. Finn RD, Clements J, Eddy SR. HMMER web server: interactive sequence similarity searching. Nucleic Acids Research. 39:W29–37.
21. Graves A, Mohamed AR, Hinton G. 2013. Speech recognition with deep recurrent neural networks. In: IEEE, editors. International Conference on Acoustics Speech and Signal Processing ICASSP. New York: IEEE. p. 6645-6649.
22. Thompson JD, Higgins DG, Gibson TJ. 1994. CLUSTAL W : improving the sensitivity of progressive multiple  sequence  alignment  through  sequence  weighting  ,  position-specific  gap  penalties  and weight matrix choice. Nucleic Acids Research. 22(22):4673–4680.
23. Tamura  K,  Peterson  D,  Peterson  N,  Stecher  G,  Nei  M,  Kumar  S.  2011.  MEGA5 :  Molecular Evolutionary Genetics Analysis Using Maximum Likelihood , Evolutionary Distance , and Maximum Parsimony Methods. 28(10):2731–2739.