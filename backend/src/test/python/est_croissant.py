import unittest
import time
import random
import codewars_test as test

from est_croissant.est_croissant import est_croissant

@test.describe('Resultats des tests de est_croissant()')
def example_tests():

    @test.it('Test 1')
    def test_10():
        nb = 10
        l=[i+1 for i in range(nb)]
        random.shuffle(l)
        l.sort()
        test.assert_equals(est_croissant(l),True,'Ce test devrait retourner TRUE', allow_raise=False)

    @test.it('Test 2')
    def test_100():
        nb = 100
        l=[i+1 for i in range(nb)]
        random.shuffle(l)
        test.assert_equals(est_croissant(l),False,'Ce test devrait retourner FALSE', allow_raise=False)
    
    @test.it('Test 3')
    def test_1000():
        nb = 1000
        l=[i+1 for i in range(nb)]
        random.shuffle(l)
        l.sort()
        test.assert_equals(est_croissant(l),True,'Ce test devrait retourner TRUE', allow_raise=False)

    @test.it('Test 4')
    def test_10000():
        nb = 10000
        l=[i+1 for i in range(nb)]
        random.shuffle(l)
        test.assert_equals(est_croissant(l),False,'Ce test devrait retourner FALSE', allow_raise=False)