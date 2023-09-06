public class Wizard {

    String name = 'Anita Sirene';
    private Long id;
    private Set<Spellbook> spellbooks;

    public Wizard() { spellbooks = new Set<Spellbook>();  }

    public Wizard(String name) { this(); this.name = name; }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName(){ return name;  }

    public void setName(String name){  this.name = name; }

    public Set<Spellbook> getSpellbooks() {  return spellbooks;  }

    public void setSpellbooks(Set<Spellbook> spellbooks) { this.spellbooks = spellbooks;  }

    public void addSpellbook(Spellbook spellbook) {
    spellbook.getWizards();
    spellbooks.add(spellbook);
  }
}