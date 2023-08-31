# Chapter 2: Forces between Atoms, Ions, and Molecules

There are two types of forces that exist between individual atoms, ions,
and molecules. The first type is based on the formal sharing of
electrons. That is, **covalent bonds**, which you learned all about in
your chemistry classes. The second type is based on **electrostatic
interactions**. That is, Coulombic interactions between objects with
formal charges and partial charges in the form of dipoles. A subset of
Coulombic interactions include the **van der Waals forces** arising from
dipole-dipole, dipole-induced dipole, and dispersion interactions. The
importance of such interactions in predicting the behavior of physical,
chemical, and biological systems comes from the fact that they exist
between all atoms, ions, and molecules at all times. While not all atoms
are capable of forming covalent bonds with each other, *every* atom or
molecule experiences van der Waals interactions with every other atom or
molecule in its vicinity. From these interactions arise most of
biological function and much of the behavior of matter. For a video
primer to this chapter, visit https://youtu.be/CgazkHdBQmo

## Energy and force

Phenomena that occur on the nanoscale arise from a few guiding
principles. First off, just like the items in your once nicely organized
desk or bedroom, stuff likes to spread out. In physics, this tendency is
sometimes due to entropy. That is, there are more ways of charges,
particles, and molecules to be spread out than there are for the same
items to be arranged neatly. Thus, the individual components of systems
tend to adjust themselves such that they are spread out as much as
possible. In the case of particles with the same charge (e.g., a bunch
of negatively charged ions) spreading out is due to electrostatic
repulsion of like charges. In fact, even a solitary charge will
experience "self repulsion" and take up as much volume as possible.[^1]
When particles and charges spread out, the potential energy is lower
than when the same species are confined. See Figure
[1.1](#fig:highlowpotential){reference-type="ref"
reference="fig:highlowpotential"} for examples of systems with high and
low potential energy.

![Examples of systems with high and low potential
energy.](chapters/chapter2/figures/highlowpotential.png){#fig:highlowpotential
width="1.0\\linewidth"}

Differences in potential energies of states lead to physical forces
which make change happen. These forces act to decrease the potential
energy of the system, from high potential energy to low potential
energy. (For example, the high gravitational potential energy of
standing at the top of a hill to the low potential energy of standing at
the base of the hill.) The potential energies of confined systems tend
to be larger than those of relaxed systems. The higher energies
associated with confined systems lead to bigger driving forces for
change to occur. For example, there is comparatively a larger difference
in the free energies of the products and reactants in a chemical
reaction when one of the reactants is constrained somehow: picture a
ring-shaped molecule that "wants" to open up to form a linear chain (the
reasons are both entropic and quantum mechanical). Or, consider the fact
that a small ion---whose charge is confined and uptight---has more to
gain by associating with an ion of the opposite charge than does a large
ion---whose charge is spread out and relaxed. Finally, when particles
such as electrons are confined to small spaces (e.g., in a **quantum
dot**), larger energies (smaller wavelengths) of photons of light are
either absorbed, emitted, or scattered. If this does not make sense
now---energy, entropy, absorption, emission, etc.---don't worry, our
goal by the end of this book is to make it make sense.

It's worth taking a closer look at what we mean by energy and force. In
high school physics and chemistry, much is made of the distinction
between potential energy and kinetic energy. You probably spent several
weeks talking about kinematics of billiard balls, projectiles, and
ballistic trajectories. Indeed, kinetic energy is useful when discussing
the kinetic theory of gasses, along with **dissipative** processes such
as friction.[^2] However, in nanoengineering and in the dynamics of
molecules and particles in solution, **potential energy** is a more
useful concept than kinetic energy. The reason is as we are more
interested in how a system came to be and how it might change, rather
than how fast its pieces are moving.

The potential energy of a system is equal to the work needed (positive
work) or done (negative work) to bring the system into existence, with
all the components at defined locations. To deconstruct the system---to
take all of the atoms and molecules and separate them into
infinity---requires the same amount of energy, but with the opposite
sign. When a system consisting of objects of any size have a lower
energy than all of the components considered separately, the system has
a **favorable** (i.e., negative) potential energy. Potential energy is
deeply connected to the concept of force. Force is the rate of change of
the potential energy with respect to some change in the system. It turns
out that these seemingly abstract concepts control a vast range of
natural phenomena when applied on the nanoscale. For example, from
properties of substances such as the stickiness of glue and the cleaning
power of soap, to basically all of chemistry and biology.

### Electrostatic interactions

Let's make these broad statements more concrete: Say you have two
charged particles. They could be made of plastic, metal, or rock, or
even single ions, like Na$^{+}$ and Cl$^{-}$ separated by distance $r$,
see Figure [1.2](#fig:NaCl){reference-type="ref" reference="fig:NaCl"}.

![Two charged particles separated by distance
$r$.](chapters/chapter2/figures/NaCl.png){#fig:NaCl
width="0.6\\linewidth"}

Any time two objects---including atoms, ions, molecules, fingers,
buildings, or planets---are near each other, there is some kind of
potential energy between them, or **interaction energy**, **interaction
potential**, or **potential energy of interaction**. Think of the
gravitational potential energy between you and the Earth when you are
someplace high up, like on a diving board. On the diving board, your
potential energy is high. On the ground, it is low. The potential energy
between two particles---atoms, ions, and molecules---can be either high
or low at a given separation depending on how the objects are charged.
Particles with like charges (i.e., two negatives) have high potential
energy; those with unlike charges have lower potential energy. In either
case, the potential energy changes as the particles are brought closer
together or farther apart.

If we are talking about small numbers of atoms, ions, and molecules, the
dominant source of the potential energy is electrostatic. That is,
opposite charges attract and like charges repel. Words like "attract"
and "repel" refer to the **force** of the interaction. However, the
accounting of the interaction on our balance sheet is done using the
*energy*. The reason is that it is the energy, not the force, that must
be conserved in any process.[^3]

In this chapter and throughout the book, when we say energy, we are
almost always talking about the potential energy. To drive home the
point, in nanoscale interactions, we generally don't care that much
about kinetic energy. That is, the energy of movement. Exceptions are
when we need to deal with effects that come from the motion of large
numbers of particles, like the pressure exerted by gasses and the forces
of friction. In these cases, kinetic energy takes on an important role.

The potential energy of a generic interaction is given by

$$w(r)=\frac{C}{r^n}$$

where $w(r)$ is the potential energy of interaction between two objects,
$C$ is a constant that takes into account the properties of the two
interacting objects, $r$ is the separation between the centers of the
two objects, and $n$ is an integer related to the type of interaction.
For electrostatic energy, $n=1$ and

$$
\label{coulomb}
        C\textsubscript{Coulomb's law}=\frac{Q\textsubscript{1}Q\textsubscript{2}}{4\pi\epsilon\textsubscript{0}}
$$

where the $Q$s are the charges ($-1 \times e$ for Cl$^{-}$ and
$+1 \times e$ for Na$^+$), and $\epsilon_0$ is the permittivity of free
space. The constant $e$ is the **fundamental charge**, or the charge of
an electron or proton.[^4] If one charge is negative and the other is
positive, the overall potential energy is negative. It is useful to
break the $Q$s down into two components, $z$ and $e$, where $z$ is the
**valency**. For Na$^+$, $z=1$; for Ca$^{2+}$, $z=2$, and so on.[^5]

What does it mean to have a negative potential energy? Before answering
the question, it is worth considering what the potential energy actually
means. The potential energy is equivalent to the work done in order to
bring the objects together. In this thought experiment, the particles
are initially separated by infinite distance. In the case of two
oppositely charged particles, which in a sense "want" to interact, it
takes *negative* work. That is, the system kind of does the work for
you. To put two particles with the same charge in close proximity, it
would have taken some effort. That is, positive work.[^6]

It is sometimes thought that a negative potential energy between two
objects implies an attractive force. This simple assumption is often
true, but not always. The more important criterion for determining the
type of force (attractive or repulsive) than the sign of the energy at a
fixed separation is what happens to the energy when the particles get
closer together or further apart. That is, does the energy increase or
decrease? If the potential energy decreases when the objects come closer
together, the force between the objects is attractive; if it increases,
the force is repulsive. So, the sign of the potential energy at a fixed
separation, $r$ (whether it is negative or positive) means nothing in
terms of force. *What matters is the rate of change* of $w(r)$ with
respect to separation, $r$. This rate of change is equal to the force.

$$
\label{force definition}
        F(r) = -\frac{dw(r)}{dr}
$$

Where the $d$s refer to small incremental differences $(\Delta$s) in
either energy (numerator) or separation (denominator). We need to have
the negative sign out front to make sure that attractive interactions
have negative forces. Convince yourself by putting the sign of the
overall force in the squares below (Table
[1.1](#Sign of the force){reference-type="ref"
reference="Sign of the force"}).

::: {#Sign of the force}
            $w(r)$inc   $w(r)$dec
  -------- ----------- -----------
   $r$inc              
   $r$dec              

  : Determine the sign of the force in the four blank squares
:::

Note that the convention that *negative force* implies *attractive
interaction* is arbitrary---just for convenience and consistency.
Negative or decreasing quantities imply driving force or stability of a
system relative to a **reference state**. A reference state is almost
always considered to be a system of particles that do not interact, as
in when they are held at infinite distance. We close this section by
saying that the above arguments and equations are valid for all charged
objects of any size: from ions to charged plastic spheres.

## Van der Waals interactions

Not all objects are permanently charged like Na$^+$ and Cl$^-$. Even so,
there will still be an electrostatic interaction between objects, even
if they are not charged! In fact, there usually is such an interaction,
even between completely nonpolar molecules.[^7] This interaction arises
because of the separation of charges in a neutral molecule or because of
transient (short-lived) shifting of the negatively charged electron
clouds around the positively charged nuclei. The short-lived electrical
dipoles that form as a result of this movement of the electron clouds is
called **transient polarization**. The type of interaction that arises
when uncharged (but still possibly dipolar) molecules get close to each
other---the **van der Waals interaction**---has three separate
components that operate by similar principles. These three components
are the **dipole-dipole** interaction (Keesom), the **dipole-induced
dipole** interaction (Debye), and the **dispersion** interaction
(London). The proper names in parentheses refer to the scientists who
first described these forces. Sometimes these interactions are called
"forces," but I want to be clear that we are usually talking about
potential energies, not forces. Saying that a nanoparticle interacts
with a cell in terms of kJ mol$^{-1}$ makes a lot more intuitive sense
than saying that it interacts by a nN (nano newton) or whatever. All
three components of the van der Waals interaction boil down to the
**Coulomb interaction** between electrical dipoles. That is, the
positively charged side of the first dipole is attracted to the negative
side of the second dipole. However, each one of the components has some
important subtleties and considerations that make them worth considering
separately.

### Dipole-dipole forces

It is clear that if opposite charges attract and like charges repel,
then neutral (uncharged) species in which charges are separated
(polarized) must also attract or repel. Whether the species attract or
repel depends on their mutual orientation. Consider two water molecules:
if the hydrogen atoms of one molecule are pointed toward the oxygen atom
of the other (specifically, the lone pairs of electrons on the oxygen
atom), then there will be an attractive interaction; if the two oxygen
atoms are facing each other, there will be a repulsive interaction.
However, unless we are at **absolute zero**[^8] (we never get even close
to absolute zero in most engineering applications), the molecules will
be tumbling around very quickly, so these attractive and repulsive
interactions will occur, and then the molecules will find a different
orientation very quickly (on the order of femtoseconds at room
temperature!). Nevertheless, since the attractive interactions are
energetically favorable, the molecules will tend to spend more time with
their dipoles aligned (partially positive H atoms pointed toward
partially negative O atoms). This bias in the orientations of the
molecules creates a force between the molecules that is overall
attractive (i.e., negative sign). As the molecules get closer together,
they spend even more time in the favorable orientation. Temperature has
a big effect on the dipole-dipole force; the higher the temperature, the
more the molecules are free to rotate. This extra energy allows them to
spend more time away from the orientations in which the dipoles are
aligned. Thus, the overall strength of the dipole-dipole attractive
force decreases with both increasing separation and increasing
temperature. That's why both $r$ and $T$ are in the denominator of
equation [\[dip-dip\]](#dip-dip){reference-type="ref"
reference="dip-dip"}.

$$
\label{dip-dip}
        w(r)\textsubscript{dip-dip}=-\frac{u\textsubscript{1}^{2}u\textsubscript{2}^{2}}{3(4\pi\epsilon\textsubscript{0})^{2}kTr^{6}}
$$

##### Hydrogen bonding

Hydrogen bonding is a special type of dipole-dipole interaction that
occurs when a hydrogen atom is bonded to an electronegative atom
(usually O, N, F, or Cl). In this bonding arrangement, electron density
is sucked toward the electronegative atom and the H atom is highly
positively charged (since it only has one electron to begin with). Thus,
the hydrogen atom bonded to a highly electronegative atom can be thought
of as almost a naked proton. Much of the positive charge which is
unshielded by the electron can create a dipole-dipole interaction with
the negative part of a nearby dipolar molecule. This interaction is
especially strong when the nearby negative charge is a lone pair of
electrons on nitrogen, oxygen, chlorine, or fluorine. Note that this
type of interaction---a hydrogen bond---does not imply a true "sharing"
of the proton between molecules, nor is it nearly as strong as a pure
Coulombic (charge-charge) interaction between two ions. Nevertheless, it
is strong enough to dominate the interactions between molecules capable
of hydrogen bonding (think of the interactions between the As, Cs, Gs,
and Ts of DNA, whose hydrogen bonds provide the "rungs" of the spiral
staircase-like double helix). Hydrogen bonds thus dominate the
properties of some of the most familiar substances, such as water.
Without hydrogen bonding, water---with a molecular weight of 18 g
mol$^{-1}$---would certainly be a gas, even at very low temperatures,
and life would be impossible.

### Dipole-induced dipole forces

As its name implies, the dipole-dipole interaction requires both
molecules of the interacting pair to have a permanent separation of
charge, or **permanent dipole**. However, a permanent dipole can also
interact with the *electron cloud* of a nearby molecule---whether it has
a permanent dipole or not---to form an **induced dipole**. Atoms and
molecules consist of tightly packed, positively charged nuclei
surrounded by comparatively diffuse clouds of negatively charged
electrons. These electron clouds can be shifted or deflected in an
electric field. This shifting is analogous to the orientation of a flag
with respect to the flagpole relative to the direction of the wind. In
this analogy, the direction of the electric field corresponds to the
direction of the wind. The source of the electric field can be from the
charged plates of a capacitor, an ion, or the permanent dipole of a
nearby molecule. In the diagram below (Figure
[1.3](#fig:debye){reference-type="ref" reference="fig:debye"}), the
dipole of "molecule 1" produces an electric field which causes the
electron cloud of "molecule 2" to deflect.

![Origin of the dipole-induced dipole force. A molecule with a permanent
dipole, such as HCl, pictured, has the negative side of its dipole on
the chlorine atom, and the positive side on the hydrogen atom. The
dipole moment, $u$, is oriented with the tail of the arrow on the
negative side, and the arrowhead pointing toward the positive side. This
permanent dipole creates an electric field which polarizes the electron
cloud of a nearby atom, such as argon, as pictured on the right. The
electron cloud is shifted away from the chlorine atom simply due to
electrostatic repulsion of two like charges. The dipole which is induced
by this electric field, $u_{ind}$, is oriented parallel to the first
dipole. The net result of this orientation is an attractive force. Note
that while we are considering the induced dipole to live on an atom
(argon, Ar) which happens to be nonpolar, it need not be. In fact, the
permanent dipole can induce a dipole in the electron cloud of *any*
molecule, whether it is polar or nonpolar. The consequence is that if
both molecules shown in the figure were HCl, then there would be *two
independent dipole-induced dipole* interactions! That is, the permanent
dipole of the first HCl acting on the electron cloud of the second, and
vice versa.](chapters/chapter2/figures/debye.png){#fig:debye
width="1.0\\linewidth"}

If the negatively charged region of the permanent dipole of molecule 1
is oriented toward the electron cloud of the molecule 2, then the
electron cloud is pushed away. The resulting temporary (induced) dipole
of 2 is oriented parallel to that of 1. This arrangement creates an
attractive (negative) force. It is important to note that this type of
interaction can occur whether the molecule 2 is polar or nonpolar. If
molecule 2 is polar, then there are dipole-induced dipole forces on top
of the dipole-dipole forces which are already present. In either case,
the ease with which the electron cloud can be displaced from its
equilibrium position about the nucleus is given by a parameter called
the **polarizability**. The polarizability is proportional to the
strength of the dipole induced by an electric field, $E$.

$$
\label{polarizability definition}
        u=\alpha\textsubscript{0}E
$$

where $u$ is the dipole moment and $\alpha\textsubscript{0}$ is the
electronic polarizability. The subscript "0" is there to remind
ourselves that the electron cloud is polarizable in *every* molecule,
whether or not it has a permanent dipole. You may see $\alpha$ by itself
referring to the total polarizability when one considers the ability to
orient a permanent dipole with an electric field as a type of
polarizability. That is, $\alpha\textsubscript{dip}$ is the **dipolar
polarizability** ($\alpha_{dip}$), sometimes useful in thinking about
the ease with which permanent dipoles align in an electric field as in
the dipole-dipole force. However, to avoid confusion, after displaying
equation
[\[total polarizability\]](#total polarizability){reference-type="ref"
reference="total polarizability"}, below, we will not mention
$\alpha_{dip}$ again in this book.

$$
\label{total polarizability}
        \alpha = \alpha_{dip} + \alpha\textsubscript{0}
$$

Factors influencing $\alpha\textsubscript{0}$ of an atom or molecule are
atomic number and number of bonds. The rule of thumb is that the farther
away the negatively charged electrons are from the positively charged
nuclei, the easier the electrons---considered as a diffuse electron
cloud---are to deflect in the presence of an electric field. Thus, the
dipole-induced dipole interaction (again, energy), is given by equation
[\[dip-ind\]](#dip-ind){reference-type="ref" reference="dip-ind"},
below.

$$
\label{dip-ind}
        w(r)\textsubscript{dip-ind}=-\frac{2u^{2}\alpha\textsubscript{0}}{(4\pi\epsilon\textsubscript{0})^{2}r^{6}}
$$

### London dispersion forces

The third, final, and in many ways most important part of the van der
Waals force exists between all atoms and molecules---whether polar or
non-polar, charged or uncharged. It arises because the electrons of all
atoms and molecules are constantly buzzing around their parent
positively charged nucleii. If you were able to take an instantaneous
snapshot of an atom or molecule, you would find that there is, by
chance, more electron density on one side of the molecule than another.
Thus, all molecules have these short-lived, instantaneous dipoles
arising from the electrons buzzing around the nucleus (for an atom) or
nuclei (of a molecule). See Figure
[1.4](#fig:london){reference-type="ref" reference="fig:london"}

![Origin of the London dispersion force. The motion of an electron
around a nucleus creates a random, instantaneous dipole. This dipole
creates an induced dipole in the electron cloud of a nearby molecule.
The overall alignment of instantaneous dipoles and induced dipoles cause
an attractive force, just as in the dipole-induced dipole
interaction.](chapters/chapter2/figures/london.png){#fig:london
width="1.0\\linewidth"}

The instantaneous dipoles in molecule 1 last for around 10$^{-15}$ s (1
femtosecond), but they are strong enough to induce a dipole in molecule
2. The strength of the transient dipole in molecule 1 can be comparable
to that of a permanent dipole. Thus, the strength of the induced dipole
of molecule 2 is comparable to that produced in either the dipole-dipole
or the dipole-induced dipole force. Unlike in the dipole-induced dipole
interaction, London dispersion interactions can happen between any part
of the two molecules, and thus they add up quickly for molecules of
appreciable size. In fact, even for highly polar, hydrogen-bonding
molecules like HCl, the contribution of the London dispersion
interaction to the total van der Waals energy is greater than that of
the energies from the dipole-dipole and dipole-induced interactions put
together. The way in which London dispersion force add up is the reason
why butane (C$_{4}$H$_{10}$) is a gas, decane (C$_{10}$H$_{22}$) is a
liquid, and octadecane (C$_{18}$H$_{38}$) is a solid, all at room
temperature (25 $\degree$C or 298 K) and atmospheric pressure (1 atm,
760 mmHg, or 105 Pa). Each additional CH~2~ unit adds around 7.5 kJ
mol$^{-1}$. As a rule of thumb, it takes a bond strength between
molecules of very roughly 75 kJ mol$^{-1}$ for molecules to bind
strongly enough with each other to condense into a liquid. Hence, decane
is a liquid.

The London equation is as follows

$$
\label{disp}
        w(r)\textsubscript{disp}=-\frac{3}{4}\frac{I\alpha\textsubscript{0}^{2}}{(4\pi\epsilon\textsubscript{0})^{2}r^{6}}
$$

where $I$ is the **ionization energy**, which is the energy required to
eject the most loosely held electron from the atom or molecule under
consideration.[^9] London derived this equation using a quantum
mechanical approach called perturbation theory. However, a close
approximation can be obtained using the equation for the dipole-induced
dipole energy, where we use a transient dipole consisting of an electron
revolving around its nucleus instead of the permanent dipole.

### Dielectric constant

Each of the expressions for
$w(r)\textsubscript{dip-dip}, w(r)\textsubscript{dip-ind},$ and
$w(r)\textsubscript{disp}$---equations
[\[dip-dip\]](#dip-dip){reference-type="eqref" reference="dip-dip"},
[\[dip-ind\]](#dip-ind){reference-type="eqref" reference="dip-ind"}, and
[\[disp\]](#disp){reference-type="eqref" reference="disp"}---are valid
for interactions in a vacuum (or air). However, in most physical
systems, interactions are occurring in a solvent medium. In biological
systems, the solvent medium is usually water. For
$w(r)\textsubscript{dip-dip}$ and $w(r)\textsubscript{dip-ind}$, the
effect of the solvent medium is usually to reduce the potential energy
of the interaction through a property called **relative
permittivity**[^10] or **dielectric constant**. To calculate this
effect, one simply puts the dielectric constant $\epsilon$ into the
denominator of equations [\[dip-dip\]](#dip-dip){reference-type="eqref"
reference="dip-dip"} and [\[dip-ind\]](#dip-ind){reference-type="eqref"
reference="dip-ind"}.[^11] For water, $\epsilon=78$ at room temperature,
or 298K. This is considered a reasonably high value of dielectric
constant among solvents.

The dielectric constant is influenced by at least four factors

1.  electronic polarizability (which is possessed by all atoms and
    molecules)

2.  dipole moment (which is possessed only by polar molecules)

3.  dipole density (because smaller polar molecules have higher
    densities in terms of molecules per unit volume)

4.  H-bonding (which locks in the polarization of the medium)

When we slap an $\epsilon$ in the denominator of an equation for
potential energy, we are treating it as a property of the medium. That
is, a **continuum theory**. However, it is worth considering the
**molecular theory** or mechanism behind how the dielectric constant
reduces electrostatic potential energies of dissolved solutes. A
high-dielectric solvent is composed of individual dipolar molecules.
These dipoles can orient around polar or charged solutes. For example,
when a sodium ion, Na$^+$, is placed in a solution of water, the lone
pairs of electrons on the oxygen atoms associate with the positively
charged ion. It costs energy to orient dipolar molecules in this way,
and thus the interaction (ion-dipole, in this case) "uses up" some of
the electrostatic potential energy of the ion. There is thus less
potential energy for the solute to interact with another solute. One way
in which this **stabilization**---i.e., lowering of the electrostatic
potential energy---of the the sodium ion manifests is in the form of a
hydration shell of oriented water molecules which develops around an ion
when placed in a solvent. For highly hydrated ions, the charges are
partially neutralized by the orientation of the dipoles of the solvent.
The overall strength of the interaction of this ion with others in
solution is reduced. Hence, the dielectric constant appears in the
denominator.

## Total van der Waals force

##### Adding up the forces between atoms and molecules

In high school, you probably learned that the van der Waals interaction
was synonymous with the London dispersion interaction. More properly,
the van der Waals interaction includes not only the dispersion
interaction, but also the dipole-dipole and dipole-induced dipole
interactions. All three interaction energies depend on the distance
between the particles $r$ as $r^{-6}$. If the $r^{-6}$ is term is
factored out, what is left is a series of constants specific to the two
molecules, containing the dipole moments, the polarizabilities, factors
of $k\textsubscript{B}$ and T, $\pi$, and the permittivity of free
space. Each one of these terms can be "balled up" into its own constant,
$C$, for dipole-dipole, dipole-induced dipole, and dispersion
($C\textsubscript{dip-dip}, C\textsubscript{dip-ind}$, and
$C\textsubscript{disp}$). These three $C$s can be added up to get
$C\textsubscript{VDW}$. So, if you know the van der Waals constant,
$C\textsubscript{VDW}$, you can get the interaction energy as a function
of separation, $r$.

$$w(r)\textsubscript{VDW}=w(r)\textsubscript{dip-dip}+w(r)\textsubscript{dip-ind}+w(r)\textsubscript{disp}$$
$$w(r)\textsubscript{VDW}=-(\frac{C\textsubscript{dip-dip}}{r^{6}}+\frac{C\textsubscript{dip-ind}}{r^6}+\frac{C\textsubscript{disp}}{r^{6}})$$
$$w(r)\textsubscript{VDW}=-\frac{C\textsubscript{VDW}}{r^{6}}$$

where

$$C\textsubscript{VDW}=\frac{u\textsubscript{1}^{2}u\textsubscript{2}^{2}}{3(4\pi\epsilon\textsubscript{0})^{2}kT}+\frac{2u^{2}\alpha\textsubscript{0}}{(4\pi\epsilon\textsubscript{0})^{2}}+\frac{3}{4}\frac{I\alpha\textsubscript{0}^{2}}{(4\pi\epsilon\textsubscript{0})^{2}}$$

We know, this equation looks complicated. However, things get simplified
quickly since pretty much every term is a constant and can be read off a
table. Moreover, most of the time, $r$ is usually also a constant in
most calculations. That is, in a solid or liquid, where the molecules
are "touching," $r = \sigma$, where $\sigma$ is two times the van der
Waals radius of the atom, $\sigma=2r\textsubscript{VDW}$. This value,
$\sigma$, can be treated as the diameter of an atom in a **van der Waals
solid**, as determined by X-ray diffraction.[^12] Another way to think
about $\sigma$ is the length of a van der Waals bond between atoms. Keep
in mind that this bond length is much larger than distance between
nuclei for covalent (chemical) bonds. The reason is that in the van der
Waals framework, the electron clouds barely overlap; in covalent bonds,
the electron clouds are shared, and thus the nuclei are very close
together. Thus, for **condensed phases** (solids and liquids), one can
simply plug in $\sigma$, the temperature, and the other constants, and
out pops the pair potential! Moreover, for solids, this pair potential
can be multiplied by a factor of $6 \times N_A$ where $N_A$ is
Avogadro's number to get the **molar cohesive energy** of the solid! All
from some knowledge of dipole moments, polarizabilities, and ionization
energies.

## Repulsive intermolecular forces and the Lennard-Jones potential

The van der Waals forces are quite strong. In fact, in the next chapter,
we will learn that the van der Waals adhesive pressure between two
completely flat objects is on the order of 1000 atm! However, we know
from experience that there must be other forces which prevent objects
from smooshing into each other, never to be separated. The fundamental
force that prevents objects from passing through each other arises from
the **Pauli exclusion principle**, which says that no two
particles---electrons in our case---with the same quantum numbers can
occupy the same physical space. Thus, the electrons in your hand
interacting with the electrons in your keyboard, your phone, or this
book produce a strong repulsive force at very small separations.

We have learned that the attractive forces arising from the van der
Waals potential energies fall off with separation at a rate proportional
to $\frac{1}{r^6}$. It turns out that repulsive forces due to Pauli
exclusion fall off much, much faster, $\frac{1}{r^{12}}$, but dominate
at very small distances. That is, once the electron clouds *really*
start to overlap. The total energy can be calculated using a so-called
"6-12 potential" termed the **Lennard-Jones potential**, see Figure
[1.5](#fig:LJfig){reference-type="ref" reference="fig:LJfig"}.[^13]

$$
\label{Lennard-Jones potential}
    w(r)=-\frac{A}{r^6}+\frac{B}{r^{12}}
$$

![The Lennard-Jones potential, $w(r)$ as a function of internuclear
distance, $r$. The sharp rise to the left is due to Pauli exclusion. The
minimum is the equilibrium separation when "bonded" at $r=\sigma$. If
you are familiar with calculus, you may notice that the plot showing the
force, in red, is the derivative (i.e., rate of change) of the plot of
energy, in black. Thus, the zero point of the red plot lines up with the
minimum in the black plot. So, the minimum in energy---equilibrium
between attractive and repulsive interactions---corresponds to the point
at which there is no force, like a spring that is being neither
stretched nor
compressed.](chapters/chapter2/figures/LJfig.png){#fig:LJfig
width="1.0\\linewidth"}

## The scale of energies and forces

This section has been very theoretical so far. However, the expressions
for energies and forces really do have physical manifestations. It is
thus worth thinking about how these quantities line up with those of
more familiar concepts. For example, the strength of a covalent bond in
chemistry, along with the strong ionic bond between oppositely charged
ions, is on the order of 100 kJ mol$^{-1}$ (a carbon-carbon bond is more
like 400 kJ mol$^{-1}$). Double bonds are about 50% higher than that, in
total, because there are two bonds instead of one. However, in chemistry
we are used to talking about moles of things---$10^{23}$
particles---which is not always useful in nanoengineering.

One reason that nanoengineers and physicists wouldn't want to use moles
in calculations is that we are often interested in the interaction of a
single molecule to a surface, or the binding of a single nanoparticle to
a cell (or a small handful of these interactions). So, we use units for
energy that are much smaller than what we have been trained to think
about in a chemistry class. The strength of a covalent or ionic bond on
a *per bond basis* is on the order of $10^{-19}$ J. These numbers are so
absurdly small that we introduce a new unit, **the thermal energy**
$k\textsubscript{B}T$, or usually just $kT$, where $k$ is the Boltzmann
constant ($1.38\times10^{-23}$ J K$^{-1}$) and $T$ is the temperature,
by convention taken as 298K (25C, unless noted otherwise). So,
$kT=4.01\times10^{-21}$ J.

Thus, the energy of a covalent or ionic bond is now on the order of 100
$kT$ and that of a van der Waals bond is 1 $kT$ (like methane, CH~4~, or
argon, Ar). For an especially strong noncovalent bond, like a hydrogen
bond, the energy may go as high as 10 $\times kT$, which makes sense,
because water is a liquid at room temperature. A good rule of thumb is
that if the intermolecular **pair potential**---van der Waals energy at
separation $\sigma$---is $\geq 10 kT$, then there is a good chance that
this species is a liquid or a solid (a *condensed phase*) at room
temperature.

Using units of $kT$ gives us nice numbers, like 1, 10, and 100, without
needing to consider the huge negative exponents. Conveniently, it also
happens that the strength of a bond between molecules in units of $kT$
is the same order of magnitude as the strength of all the bonds in a
mole of molecules in units of kJ mol$^{-1}$. So, a covalent bond has an
energy of around 100 $kT$ per atom and around 100 kJ mol$^{-1}$ (order
of magnitude only). In terms of forces, a covalent or ionic bond can be
separated by around 1 nN (mnemonic: nanoengineering, nanonewton). The
force needed to separate a strong hydrogen bond is around 100 pN, and
that needed to separate a normal van der Waals bond in contact is around
10 pN.

## Outlook

In this chapter, we illustrated the origins and some of the consequences
of *intermolecular forces*. These non-covalent bonds have their bases in
electrostatics and quantum mechanics, but give rise to much of the
behavior of matter which does not involve the movement or sharing of
electrons between atoms. These interactions are also responsible for
molecular self-assembly and much of the complexity of biological
systems. In the biased opinion of the authors, they are perhaps the most
underappreciated energetic interactions in all of the sciences and
engineering. They control phase changes, latent heat, dynamics of
multiparticle systems, and dominate the the properties of most forms of
organic matter. (In an alternate universe, there would be whole
undergraduate degrees in the consequences of intermolecular forces that
give rise to noncovalent bonds. However, in our own universe,
chemistry---i.e., the study of the formation of *covalent* bonds---ended
up being the subject that most high school students take.) In the next
chapter, we will take what we have learned about forces between atoms
and molecules and apply them to forces between nanoparticles and
macroscopic objects and surfaces.

## Problems

1.  In a chemistry class, you may have learned that the strength of an
    acid is determined by the stability of its conjugate base. Said
    another way, the $pK_a$ of an acid is lower---favoring dissociation
    into H$^+$ and A$^-$ if A$^-$ is relatively stable as an anion.
    Using the concept of electrostatic potential energy, how can this
    conception of the strength of acids be used to rationalize the
    increase in acidity as one goes down the halides from top to bottom:
    F, Cl, Br, I?

2.  Which part of the van der Waals interaction depends on temperature?
    Why?

3.  The Boltzmann constant times the temperature, $kT$, is often used as
    a measure of energy, called the **thermal energy**. The strength of
    a van der Waals bond of two small uncharged molecules is around 1
    $kT$, for water---which exhibits strong hydrogen bonding---the
    strength of the interaction is around 10 $kT$. What is the value of
    the thermal energy at room temperature (298 K)? What is the
    approximate (order of magnitude) value of the strength of an ionic
    bond as in NaCl?

4.  Explain why butane (C$_4$H$_{10}$) is a gas at room temperature
    while octadecane (C$_{18}$H$_{38}$) is a solid.

5.  The situation depicted at the bottom of Figure
    [1.1](#fig:highlowpotential){reference-type="ref"
    reference="fig:highlowpotential"} seems to suggest that particles
    always spread out in a closed system due to entropy. That is,
    physical systems tend toward configurations which maximize the
    number of statistical microstates available. In light of this
    tendency, why do oil and water separate in salad dressing? What
    other forces do we have to consider?

6.  Imagine two particles that interact with a negative potential energy
    at a given distance of separation, $r$. Is the force attractive or
    repulsive? What information do you need about the interaction to
    know for sure?

7.  Calculate the van der Waals coefficient C$_{VDW}$ for two neon atoms
    interacting in a vacuum. You may assume the orbital frequency $\nu$
    is 5.5$\times$`<!-- -->`{=html}10$^{15}$ Hz and the polarizability
    divided by the usual constants
    $\alpha_{0}/(4\pi\epsilon_{0})=0.39\times10^{-30}$ m$^3$. Then use
    this value to calculate the strength of the van der Waals bond at
    contact if the van der Waals radius for neon is 0.154 nm.

8.  Recall the van der Waals equation of state from chemistry: it is the
    equation that makes corrections to the idea gas equation for
    attractive forces ($a$ parameter) and excluded volume ($b$
    parameter). In light of what you learned in this chapter, how would
    you expect the $a$ and $b$ parameters of the Van der Waals equation
    of state to differ between iodine (I~2~) and chlorine (Cl~2~) gas?

9.  There is a Lennard-Jones interaction between two atoms 5 nm apart
    with $A=10^{-76}$ J m$^6$ and $B=10^{-135}$ J m$^{12}$. Calculate
    the force.

10. Calculate the separation *r* in nanometers beyond which the
    interaction energy between a barium ion and a bromide ion falls
    below *kT* at room temperature in a vacuum.

## Further Reading

We owe a great debt of gratitude to the wonderful monograph
(single-author textbook on a single topic) to the late Professor Jacob
N. Israelachvili of UC Santa Barbara for his book. By now, multiple
generations of students have learned the fundamentals of intermolecular
and surface forces from his book. When I (Darren) was a new assistant
professor in 2012, I was assigned to teach a core graduate-level class
in this topic, which was required for first-year MS and PhD students in
the nanoengineering major. I was asked to teach this class without ever
having taken a similar course as a student. I could never have done it
without this gem of a book. Its treatment of intermolecular forces
applied to polymers, along with the chapter on friction, are directly
responsible for my having the confidence to mentor students (including
Robert Ramji) who want to do molecular dynamics simulations (see Chapter
15), along with haptic interfaces, respectively. It is among the most
self-consistent syntheses of disparate topics among any theoretical
books I have ever read. The ways in which it marries classical physics,
quantum mechanics, modeling, and observables, and connects them to
real-world phenomena is an extraordinary achievement. While the
treatment of these topics will assume much more prior knowledge than
would normally be possessed by a first-year undergraduate, the motivated
reader will still stand to gain much by picking up the book from their
school's library, or downloading the electronic version, which will be
available from many university library systems.

Israelachvili, Jacob N. *Intermolecular and Surface Forces, Third
Edition* Academic Press, 2011, 704 pp.

[^1]: This principle explains why the iodide ion, I$^-$, has a lower
    potential energy than the much smaller fluoride ion, F$^-$

[^2]: Dissipative means that an initially directed form of energy like a
    foot stomp is transformed into a multitude of processes for which
    it's more difficult to account: sound waves, microscopic damage to
    your shoe sole and the floor, molecular motion, and heat.

[^3]: A fundamental concern in all of engineering is to keep track of
    where all the energy goes: inputs from fossil fuels, the sun, and
    the wind, and outputs in the form of useful work. Less useful
    outcomes like friction, heat, and sound waves, are often things to
    be suppressed. Since these loss mechanisms have their origins in
    processes that occur on the nanoscale and molecular scale (often at
    the interfaces between unlike materials), reducing these sources of
    energy loss are a huge opportunity for nanoengineers!

[^4]: $e=1.6\times10^{-19}$C, where the unit C is one Coulomb, or the
    amount of charge that flows in a current of one Ampere over the
    course of one second, A $\times$ s.

[^5]: The valency is also where the negative sign gets re-introduced.
    For the ionic interaction between sodium and chloride, NaCl, $z_1=1$
    and $z_2=-1$.

[^6]: Potential energies are so important in chemistry and
    nanoengineering, that when we say "potential," "potential function,"
    or even just "energy," we are always talking about the potential
    energy.

[^7]: Examples of molecules with no electric dipole include methane,
    CH$_4$, and benzene, C$_6$H$_6$; examples of molecules with a
    permanent dipole include water and ammonia, NH$_3$.

[^8]: Absolute zero means 0Kelvin, the temperature at which all atoms in
    the observed system would be perfecctly stationary - it is virtually
    impossible to attain or measure, because the act of measurement
    introduces some degree of motion, and thus, temperature, into the
    system

[^9]: The ionization energy equals the product of Planck's constant
    times the frequency of the lowest energy photon that will kick out
    an electron from the system, $I=h\nu$, where $\nu\approx10^{-15}$Hz.
    The value of Planck's constant is $6.626\times10^{-34}$Js.

[^10]: Relative to air or vacuum, where $\epsilon=1$.

[^11]: For the London dispersion interaction,
    [\[disp\]](#disp){reference-type="eqref" reference="disp"}, the
    effect of the dielectric constant is not so simple, since the
    effects of many nearby oscillating electron clouds have a
    complicated effect on the induced dipole of a reference molecule.
    For the sake of simplicity, we will only ask you to calculate
    dispersion energies in air or vacuum. For more complicated systems
    of nanoparticles and surfaces discussed in the next chapter,
    empirically determined values will be provided to you. You shouldn't
    feel cheated, however, since that is how we do things as
    experimental researchers in the laboratory.

[^12]: A van der Waals solid is a solid held together by van der
    Waals---as opposed to covalent---bonds.

[^13]: Contrary to popular belief, Lennard-Jones was one person, not
    two.