import unittest
import codewars_test as test


from funcFile import recherche_element

@test.describe('Resultats des tests de recherche_element()')
def example_tests():

    @test.it('Test 1')
    def test_10():
        nb = 10
        l=[i+1 for i in range(nb)]
        test.assert_equals(recherche_element(l, 11),False,'Ce test devrait retourner FALSE', allow_raise=False)

    @test.it('Test 2')
    def test_100():
        nb = 100
        l=[i+1 for i in range(nb)]
        test.assert_equals(recherche_element(l, 99),True,'Ce test devrait retourner TRUE', allow_raise=False)
    
    @test.it('Test 3')
    def test_1000():
        nb = 1000
        l=[i+1 for i in range(nb)]
        test.assert_equals(recherche_element(l, 500),True,'Ce test devrait retourner TRUE', allow_raise=False)

    @test.it('Test 4')
    def test_10000():
        nb = 10000
        l=[i+1 for i in range(nb)]
        test.assert_equals(recherche_element(l , -1),False,'Ce test devrait retourner FALSE', allow_raise=False)