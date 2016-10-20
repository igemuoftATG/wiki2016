# Modeling Protein Folding with Rosetta

### Introduction

In order to model and compare the gold(III)-binding ability of a GolS homodimer and two mutant variants, we used the Robetta Full-chain Protein Structure Prediction Server, as well as the Rosetta and pyRosetta modeling software tools. GolS, as a MerR family transcriptional regulator, serves as a kind of natural “gold detector” within S. enterica, but lacks specificity for gold, and is susceptible to cross-reactions with copper(I) and silver(I) (Checa and Soncini, 2011). Further, there is no extant crystal structure for GolS. In conjunction with our Wet Lab’s efforts to improve the gold-selectivity and specificity of GolS, we have modeled the gold(III)-binding potential of a GolS homodimer and two mutated variants (P118A, or alanine-to-phenylananine point mutation at residue 118, and A113T, or alanine-to-threonine point mutation at residue 113). In particular, these mutations were designed to shrink the size of the metal ion binding pocket of GolS. GolS shares a helix-turn-helix metal ion binding domain and almost all major catalytic residues with another MerR transcriptional regulator, CueR, that is sensitive to copper. These catalytic residues include Thr13, Lys15, Arg18, Tyr20, Asn34, Tyr36, Arg37, and Arg54, but have an exception in Ser4 in GolS, which corresponds to the functionally opposed Gly4 in CueR. Given these similarities, our Wet Lab formed the hypothesis that the size and shape of the metal ion binding pocket of MerR family transcriptional regulators may confer binding specificity to a particular metal ion.

### Modeling the GolS Homodimer with Rosetta

We modeled GolS as a homodimer for two reasons; firstly, many MerR family transcriptional regulators function as homodimers, and secondly, we predict that monomer-monomer interactions between Cys112 and Cys120 from chain 1 and Ser77 from chain B, (from each side), are necessary for chelation of the metal ion, such that the gold-binding potential of a GolS monomer could not usefully be measured. 
In order to model GolS as a homodimer, we inputted the amino acid sequence of GolS, our desired symmetry constraints, and a CueR template. and used the Robetta 3-D Modeling web service in order to generate a 3D structure for a GolS homodimer. Robetta employs the ‘Ginzu’ method of domain prediction to screen for regions of the query sequence that are homologous to extant experimentally verified models via BLAST, PSI-BLAST, FFASO3, 3D-Jury, and multiple-sequence based alignments. This is followed by alignment of the generated model with the template through the K*Sync method, which utilizes secondary-structure prediction and residue profile-profile comparison (Kim, E.D., Chivian, D., and Baker, D., 2004.) A still image of the generated GolS homodimer is attached below in Appendix I.

### Modeling Mutant Variants in PyRosetta

In order to model the mutant variants of GolS, we used PyRosetta’s “pose_from_pdb” function to generate a “pose” structure that could be manipulated within PyRosetta from the Robetta-generated Protein Data Bank (PDB) file of the GolS homodimer. Following “pose” generation, we used the “mutate_residue” function to create two mutant GolS variants: a P118A variant where the Ala118 residue in GolS was converted to Phe118 and a A113T variant where the Ala113 residue in GolS was converted to Thr113, and PyRosetta automatically accounts for resulting changes to rotamers (Chaudhary, Lyskov, and Gray, 2010). 

### Modeling Gold Binding

Finally, we created a model for our ligand (gold (III)) within Rosetta, modelled the ability of the GolS homodimer to bind gold(III), and further compared the gold-binding abilities of two mutant versions of GolS, P118A and A113T. First, we downloaded a structural data file (SDF file) containing information of all documented instances of AU3+ functioning as a ligand from RCSB (Berman, Westbrook, Feng, Gililand, Bhat, Weissig, Shindyalov, Bourne, 2000). Following this, we executed Rosetta’s “molfile_to_params” function in order to generate a “params” file for gold(III) containing structural and charge information that allowed for ligand modelling within Rosetta. Due to the fact that gold(III) is a metal ion and is not expected to contain hydrogens, we were able to omit an intermediate cleaning step that is usually required prior to generation of a “params” file. Finally, we used Rosetta’s automatic ligand-docking function in order to compare gold(III)-binding potential of GolS, P118A, and A113T. 

### Modeling the Size of the Metal Ion Binding Pocket

![](http://2016.igem.org/wiki/images/e/ed/T--Toronto--2016_GolS_homodimer.png)
Rosetta predicted model of GolS dimer 


# Metabolic Modeling with Flux Balance Analysis

We used Flux Balance Analysis (FBA) in order to model the metabolic activity of the E. coli S30 cell-free extract which has been used by our Wetlab team as the basis for the synthetic gene network driving the Pardee lab’s paper biosensor. We began by using an annotated, EcoCyc-aligned genome-scale reconstruction of the metabolic network SBML file for E. coli K12 MG1655 generated by Feist et al2., removed all transport, import, and export reactions from the metabolome, altered the reaction constraints to suit the conditions in LB media, and finally used COBRApy to model and optimize the metabolic activity of the E. coli cell extract.
